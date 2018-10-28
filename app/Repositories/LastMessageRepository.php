<?php

namespace App\Repositories;

use App\Mongodb\LastMessage;
use App\Mongodb\Rule;
use App\Mongodb\UnreadMessage;

class LastMessageRepository extends BaseRepository
{
	/**
	 * Create a new UserRepository instance.
	 *
	 * @param  App\LastMessage $last_message
	 * @return void
	 */
	public function __construct(LastMessage $model)
	{
		$this->model = $model;
	}

    public function getList($room_id_arr){
        return $this->model->whereIn('room_id', $room_id_arr)
            ->orderBy('created_at', 'desc')->get();
    }
}
