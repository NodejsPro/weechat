<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestRequest;
use App\Mongodb\EmbotPlan;
use App\Http\Requests\UserRequest;
use App\Repositories\ContactRepository;
use App\Repositories\LastMessageRepository;
use App\Repositories\RoomRepository;
use App\Repositories\UnreadMessageRepository;
use App\Repositories\UserMongoRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cookie;
use Jenssegers\Mongodb\Auth\User;
use Illuminate\Support\Facades\Hash;

class RoomController extends Controller
{
    protected $repUser;
    protected $repRoom;
    protected $repLastMessage;
    protected $repUnreadMessage;

    public function __construct(
        UserRepository $user,
        LastMessageRepository $last_message,
        UnreadMessageRepository $unread_message,
        RoomRepository $room
    ){
        $this->repUser = $user;
        $this->repRoom = $room;
        $this->repLastMessage = $last_message;
        $this->repUnreadMessage = $unread_message;
        Log::info('api RoomController');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    }

    public function getList(Request $request){
        $inputs = $request->all();
        Log::info('api getList');
        Log::info($inputs);

        $validator = Validator::make(
            $inputs,
            array(
                'phone' => 'required'
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $phone = $inputs['phone'];
        $user = $this->repUser->getOneByField('phone', $phone);
        $start = isset($inputs['start']) ? (int)$inputs['start'] : 0;
        $length = isset($inputs['length']) ? (int)$inputs['length'] : config('constants.per_page')[3];
        if($user){
            $user_id = $user->id;
            $user_room = $this->repRoom->getByUserID($user_id, [], null, $start, $length);
            $data_room = $this->convertRoomData($user_room);
            $member_user_id = [];
            $admin_key_flg_disable = config('constants.active.disable');
            foreach ($data_room as $index => $room){
                // xóa các room mà chính admin get mà bị mất key
                if(isset($room['admin_key_flg']) && isset($room['admin_id']) && $room['admin_key_flg'] == $admin_key_flg_disable && $room['admin_id'] == $user_id){
                    unset($data_room[$index]);
                    continue;
                }
                $unread = $this->repUnreadMessage->getUnread($room['id'], $user_id);
                $member_user_id = array_merge($member_user_id, $room['member']);
                $data_last_message = [];
                $data_unread_message_count = 0;
                if($unread && isset($unread->count) && $unread->count){
                    $data_unread_message_count = $unread->count;
                }
                $last_message = $this->repLastMessage->getOneByField('room_id', $room['id']);
                if($last_message){
                    $data_last_message = [
                        'user_id' => $last_message->user_id,
                        'message' => $last_message->message,
                        'message_type' => $last_message->message_type,
                    ];
                }
                $data_room[$index]['data_unread_message_count'] = $data_unread_message_count;
                $data_room[$index]['last_message'] = count($data_last_message) ? $data_last_message : [""  => ""];
            }
            $data_room = array_values($data_room);
            Log::info('$data_room');
            Log::info($data_room);
            $member_data = [];
            if(count($member_user_id) > 0){
                $member_name = $this->repUser->getList($member_user_id, 0, config('constants.per_page.5'));
                $member_data = $this->convertUserData($member_name);
            }
            return Response::json([
                'success' => true,
                'data' => $data_room,
                'member_name' => $member_data
            ], 200);
        }
        return Response::json([
            'success' => true,
            'msg' => trans('message.user_not_exists')
        ], 400);
    }

    public function create(Request $request){
    	// dd(1);
        $inputs = $request->all();
        Log::info('api create');
        Log::info($inputs);
        $validator = Validator::make(
            $inputs,
            array(
                'user_id' => 'required',
                'member' => 'required|array',
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $user_id = $inputs['user_id'];
        $member = $inputs['member'];
        $msg = trans('message.phone_not_in_member');
        if(in_array($user_id, $member)){
            $user = $this->repUser->getUserById($user_id);
            if($user && !empty($user->contact) && !empty(array_intersect($member, $user->contact))){
                $member_fix = array_intersect($member, $user->contact);
                $inputs['member'] = array_merge($member_fix, [$user_id]);
                if(empty($inputs['name'])){
                    $member_name = $this->repUser->getList($inputs['member'], 0, config('constants.per_page.5'));
                    $name = [];
                    foreach ($member_name as $item_name){
                        $name[] = $item_name->user_name;
                    }
                    $inputs['name'] = implode(',', $name);
                }
                $inputs['room_type'] = config('constants.room_type.one_many');
                $room = $this->repRoom->store($inputs, $user->id);
                return Response::json(array(
                    'success' => true,
                    'room' => $this->convertRoomData([$room])
                ), 200);
            }
            $msg = trans('message.some_phone_not_exists_or_not_contact');
        }
        return Response::json(array(
                'success' => false,
                'msg' => $msg
            ), 400);
    }

    public function show(){

    }

    public function update(Request $request){
        $inputs = $request->all();
        Log::info('api update');
        Log::info($inputs);
        $validator = Validator::make(
            $inputs,
            array(
                'user_id' => 'required',
                'room_id' => 'required',
                'member' => 'array',
//                'room_name' => 'array',
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $user_id = $inputs['user_id'];
        $room_id = $inputs['room_id'];
        $member = @$inputs['member'];
        $msg = trans('message.phone_not_in_member');
        if(empty($member) || (!empty($member) && in_array($user_id, $member))){
            $room = $this->repRoom->getById($room_id);
            if($room && $this->validateMember($member, $room)){
                $user_room = $this->repUser->getById($room->admin_id);
                if($user_room){
                    $member_fix = array_intersect($member, $user_room->contact);
                    $inputs['member'] = array_merge($member_fix, [$user_id]);
                    $user = $this->repUser->getUserById($user_id);
                    if($user && ($user_room->id == $user->id || $user_room->created_id == $user->id || $user->authority == config('constants.authority.super_admin'))){
                        $inputs['name'] = $inputs['room_name'];
                        $room = $this->repRoom->update($room, $inputs);
                        return Response::json(array(
                            'success' => true,
                            'room' => $this->convertRoomData([$room])
                        ), 200);
                    }
                }
            }
            $msg = trans('message.room_not_in_member');
        }
        return Response::json(array(
            'success' => false,
            'msg' => $msg
        ), 400);
    }

    public function validateMember($member, $room){
        if(empty($member)){
            return true;
        }
        $result = false;
        $room_type_constants = config('constants.room_type');
        if($room->room_type == $room_type_constants['one_many']){
            $result = true;
        }
        return $result;
    }

    public function updateRoomInfo(Request $request){
        $inputs = $request->all();
        Log::info('api update');
        Log::info($inputs);
        $validator = Validator::make(
            $inputs,
            array(
                'room_id' => 'required',
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $room_id = $inputs['room_id'];
        unset($inputs['room_id']);
        $room = $this->repRoom->getById($room_id);
        if($room){
            $room = $this->repRoom->updateInfo($room, $inputs);
            return response([
                "success" => true,
                'room' => $room
            ], 200);
        }
        return response([
            "success" => false,
            'msg' => 'room not invalid'
        ], 422);

    }

    public function updateUserKey(Request $request){
        $inputs = $request->all();
        Log::info('api updateUserKey');
        Log::info($inputs);
        $validator = Validator::make(
            $inputs,
            array(
                'rooms' => 'required|array',
                'rooms.*.room_id' => 'required',
                'rooms.*.admin_id' => 'required',
                'rooms.*.user_id' => 'required',
                'rooms.*.share_key_flg' => 'required|in:'.implode(',', array_values(config('constants.active')))
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $input_rooms = $inputs['rooms'];
        $room_id_arr = [];
        $room_data = [];
        foreach ($input_rooms as $room){
            $room_id_arr[] = $room['room_id'];
            $room_data[$room['room_id']]['admin_id'] = $room['admin_id'];
            $room_data[$room['room_id']]['user_id'] = $room['user_id'];
            $room_data[$room['room_id']]['share_key_flg'] = $room['share_key_flg'];
        }
//        $user_share_key_flg = (int)$inputs['share_key_flg'];
        $rooms = $this->repRoom->getAll($room_id_arr, 0, config('constants.per_page.5'));
        $flg_share = false;
        $result = [];
//        dd($rooms);
        if(count($rooms) > 0){
            foreach($rooms as $key => $room){
                $room_current = @$room_data[$room->id];
                if(isset($room_current) && $room_current['admin_id'] == $room->admin_id && in_array($room_current['user_id'], $room->member)){
                    $flg_share = true;
                    $share_key_flg = $room->share_key_flg;
                    // chưa share key
                    if(empty($share_key_flg) || !isset($share_key_flg[$inputs['user_id']])){
                        Log::info('add share key new user_id ' . $inputs['user_id'] . ' into room_id ' . $inputs['room_id']);
                        $share_key_flg[$inputs['user_id']] = (int)$room_current['share_key_flg'];
                        $rooms[$key] = $this->repRoom->updateShareKey($room, $share_key_flg);
                    // cap nhat lai trang thai share key
                    }else{
                        $share_key_flg[$inputs['user_id']] = (int)$room_current['share_key_flg'];
                        $rooms[$key] = $this->repRoom->updateShareKey($room, $share_key_flg);
                        Log::info('update share key new user_id' . $inputs['user_id'] . ' into room_id' . $inputs['room_id']);
                    }
                }
            }
        }
        if($flg_share){
            return response([
                "success" => true,
                'room' => $this->convertRoomData($rooms, config('constants.active.enable')),
                'msg' => 'room share key ok'
            ], 200);
        }
        return response([
            "success" => false,
            'msg' => 'room not exits'
        ], 400);
    }
}
