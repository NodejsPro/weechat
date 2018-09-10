<?php

namespace App\Console\Commands;

use App\Http\Controllers\Controller;
use App\Repositories\LogMessageRepository;
use App\Repositories\RoomRepository;
use App\Repositories\UserRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class ClearLog extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clearLog {user_id?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear log user';

    protected $repUser;
    protected $repRoom;
    protected $repLogMessage;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(
        UserRepository $user,
        RoomRepository $room,
        LogMessageRepository $logMessage

    )
    {
        parent::__construct();
        $this->repUser = $user;
        $this->repRoom = $room;
        $this->repLogMessage = $logMessage;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $date = date('Y-m-d 00:00:01');
        Log::info('command ' . $this->signature . ' date: ' . $date);
        $user_id = $this->argument('user_id');
        if($user_id){
            // get all room theo users
            $rooms = $this->repRoom->getByUserID($user_id, [], null, 0, config('constants.per_page.6'));
        }else{
            $rooms = $this->repRoom->getAllData();
        }
        foreach($rooms as $room){
            $room_id = $room->id;
            // trường hợp clear log theo user_id
            if($user_id){
                $user = $this->repUser->getById($user_id);
                if($user){
                    $this->clearLogUser($room_id, $user);
                }
            // trường hợp clear log toàn bộ
            }else{
                $users = $this->repUser->getContact($room->member, 0, config('constants.per_page.6'));
                foreach($users as $user){
                    $this->clearLogUser($room_id, $user);
                }
            }
        }
    }

    public function clearLogUser($room_id, $user){
        $user_time_log = config('constants.time_save_log_default');
        $user_save_log = $user->time_save_log;
        if(isset($user_save_log['save'])){
            // luu log voi so ngay
            // nếu tồn tại offset day -> clear số ngày trước đấy.
            // nếu ko có offset day -> clear từ ngày hiện tại
            $user_time_log = 0;
            if(isset($user_save_log['day'])){
                $user_time_log = $user_save_log['day'];
            }
        }
        Log::info('**** clear user ' . $user->user_name. ' day: ' . $user_time_log);
        $day_clear_log = date('Y-m-d', strtotime(-$user_time_log .'days'));
        $this->repLogMessage->clearLogByUserRoom($room_id, $user->id, $day_clear_log);
    }


}