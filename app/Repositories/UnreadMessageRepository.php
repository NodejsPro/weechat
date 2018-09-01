<?php

namespace App\Repositories;

use App\Mongodb\Rule;
use App\Mongodb\UnreadMessage;

class UnreadMessageRepository extends BaseRepository
{
	/**
	 * Create a new UserRepository instance.
	 *
	 * @param  App\UnreadMessage $unread_message
	 * @return void
	 */
	public function __construct(UnreadMessage $model)
	{
		$this->model = $model;
	}

	public  function getUnread($room_id, $user_id){
        return $this->model->where('room_id', $room_id)
            ->where('user_id', $user_id)
            ->first();
    }
}
