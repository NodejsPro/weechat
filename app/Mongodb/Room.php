<?php

namespace App\Mongodb;

use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;
use Jenssegers\Mongodb\Eloquent\Model as Moloquent;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;


class Room extends Moloquent
{
    use Notifiable;
    use SoftDeletes;
    protected $connection = 'mongodb';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
        'confirmation_token', 'confirmation_sent_at'
    ];

       protected $fillable = [
        'name', 'email', 'password',
        'authority',
        'phone' ,
        'validate_token',
        'avatar',
        'user_name',
        'share_key_flg',
        'admin_key_flg',
        'code','confirmation_token' ,'created_id'
    ];

    protected $dates = [
        'deleted_at',
        'confirmed_at',
        'confirmation_sent_at',
    ];
}
