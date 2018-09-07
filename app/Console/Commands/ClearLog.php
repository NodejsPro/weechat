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
                $users = $this->repUser->getAllData();
                foreach($users as $user){
                    $this->clearLogUser($room_id, $user);
                }
            }
        }
    }

    public function clearLogUser($room_id, $user){
        $time_log = config('constants.time_save_log');
        $time_log_day = config('constants.time_save_log_day');
//        $user_time_log = $time_log['one_year'];
        $user_time_log = $time_log['one_day'];
        if(isset($user->time_save_log) && in_array($user->time_save_log, $time_log)){
            $user_time_log = $user->time_save_log;
        }
        $day_clear_log = date('Y-m-d', strtotime(-$time_log_day[$user_time_log]));
        $this->repLogMessage->clearLogByUserRoom($room_id, $user->id, $day_clear_log);
    }


}