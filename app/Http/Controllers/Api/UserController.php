<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestRequest;
use App\Mongodb\EmbotPlan;
use App\Http\Requests\UserRequest;
use App\Repositories\ConnectPageRepository;
use App\Repositories\ConnectRepository;
use App\Repositories\EmbotPlanRepository;
use App\Repositories\MasterRepository;
use App\Repositories\PlanRepository;
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

class UserController extends Controller
{
    protected $repUser;
    protected $repMaster;
	protected $repPlan;
    protected $repConnect;
    protected $repConnectPage;
    protected $repEmbotPlan;

    public function __construct(
        UserRepository $user
    ){
        $this->repUser = $user;
        $this->middleware('authentication.api', ['except' => ['userLogin', 'create']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    }

    public function userLogin(Request $request){
        $inputs = $request->all();
        $validator = Validator::make(
            $inputs,
            array(
                'user-name' => 'required',
                'password' => 'required'
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $user_name = $inputs['user-name'];
        $password = $inputs['password'];
        $user = $this->repUser->getOneByField('user_name', $user_name);
        if($user && Hash::check($password, $user->password)){
            $code = $user->code;
            $inputs = [];
            if(empty($code)){
                // call api code
                if(config('app.env') == 'local'){
                    $code = config('app.code_sms');
                }else{
                    $code = uniqid();
                }
                $inputs['code'] = $code;
            }
            $validate_token = $this->getValidateToken();
            $inputs['validate_token'] = $validate_token;
            $this->repUser->updateStatus($user, $inputs);
            $data = [
                'success' => true,
                'validate_token' => $validate_token
            ];
            return Response::json($data, 200);
        }
        return Response::json(
            array(
                'success' => false,
                'msg' => trans('message.login_fail')
                ), 400);
    }

    public function authentication(Request $request){
        $inputs = $request->all();
        $validator = Validator::make(
            $inputs,
            array(
                'phone' => 'required',
                'code' => 'required'
            )
        );
        if ($validator->fails()){
            return response([
                "success" => false,
                'msg' => $validator->errors()->getMessages()
            ], 422);
        }
        $phone_number = $inputs['phone'];
        $code = $inputs['code'];
        $user = $this->repUser->getUserCode($phone_number, $code);
        Log::info($user);
        if($user){
            $inputs = [
                'code' => '',
                'is_login' => true,
            ];
            $user = $this->repUser->updateStatus($user, $inputs);
            $user_arr = [$user];
            $data = [
                'success' => true,
                'data' => $this->convertUserData($user_arr),
                'validate_token' => $user->validate_token
            ];
            return Response::json($data, 200);
        }
        return Response::json(array(
            'success' => false,
            'msg' => trans('message.common_error')
        ), 400);
    }

    public function create(Request $request){
    	// dd(1);
        $inputs = $request->all();
        $authority = @$inputs['authority'];
        $email = @$inputs['email'];
        $name = @$inputs['name'];
        $user_name = @$inputs['user_name'];
        $phone = @$inputs['phone'];
        $avatar = @$inputs['avatar'];
        $created_id = @$inputs['created_id'];
        $password = @$inputs['password'];
        $validate_token = $request->header('validate_token');
        // $confirmation_token = @$inputs['password'];
        if(!empty($validate_token) && !empty($authority) && !empty($email) && !empty($name) && !empty($user_name)
         && !empty($phone) && !empty($avatar) && !empty($created_id) && !empty($password)){
         	$user_created = $this->repUser->getById($created_id);
         	if($user_created){
         		$inputs['confirmation_token'] = $this->getValidateToken();
	            //$user = $this->repUser->store($inputs);
                return Response::json([
                	'success' => true
                ], 200);
            }else{
     		return Response::json([
                	'success' => false,
                	'msg' => 'User quản lý không tồn tại'
                ], 400);
     		}
     	}	
        return Response::json(array(
                'success' => false
            ), 400);
    }

    public function userTest(){
        $user_check = $this->repUser->getOneByField("email", 'supper_admin@weechat.com');
        if(!$user_check){
            \App\Mongodb\User::create([
                'authority' => '001',
                'email' => 'supper_admin@weechat.com',
                'name' => 'supper admin',
                'password' => '$2y$10$bJGmXuUkx2hfURc2/fNj9O0ViaKgpUGsqzZNHNL6/QFCx8yEhI/yS',
                'phone' => '01656228578',
                'validate_token' => null,
                'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
                'user_name' => 'super_admin',
            ]);
        }

        $user_check = $this->repUser->getOneByField("email", 'admin_lv1@weechat.com');
        if(!$user_check){
            \App\Mongodb\User::create([
                'authority' => '002',
                'email' => 'admin_lv1@weechat.com',
                'name' => 'admin lv1',
                'password' => '$2y$10$bJGmXuUkx2hfURc2/fNj9O0ViaKgpUGsqzZNHNL6/QFCx8yEhI/yS',
                'phone' => '01656228579',
                'validate_token' => null,
                'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
                'user_name' => 'admin_lv1',
                'code' => null,
                'confirmation_token' => null,
            ]);

        }

         $user_check = $this->repUser->getOneByField("email", 'admin_lv2@weechat.com');
        if(!$user_check){
            \App\Mongodb\User::create([
                'authority' => '003',
                'email' => 'admin_lv2@weechat.com',
                'name' => 'admin lv2',
                'password' => '$2y$10$bJGmXuUkx2hfURc2/fNj9O0ViaKgpUGsqzZNHNL6/QFCx8yEhI/yS',
                'phone' => '01656228580',
                'validate_token' => null,
                'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
                'user_name' => 'admin_lv2',
                'code' => null,
                'confirmation_token' => null,
            ]);
        }


        $user_check = $this->repUser->getOneByField("email", 'client@weechat.com');
        if(!$user_check){
            \App\Mongodb\User::create([
                'authority' => '004',
                'email' => 'client@weechat.com',
                'name' => 'client',
                'password' => '$2y$10$bJGmXuUkx2hfURc2/fNj9O0ViaKgpUGsqzZNHNL6/QFCx8yEhI/yS',
                'phone' => '01656228581',
                'validate_token' => null,
                'avatar' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
                'user_name' => 'client',
                'code' => null,
                'confirmation_token' => null,
            ]);
        }
    }

    public function show(){

    }

    public function checkRequest($request){
        $validator = Validator::make(
            $request->all(),
            array(
                'user-name' => 'required',
                'password' => 'required'
            )
        );
        if ($validator->fails()){
            return response([
                "success" => '13123',
                'msg' => '123'
            ], 422);
        }
    }
}