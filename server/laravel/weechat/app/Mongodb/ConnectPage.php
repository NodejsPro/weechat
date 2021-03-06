<?php
namespace App\Mongodb;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class ConnectPage extends \Moloquent {

    protected $connection = 'mongodb';
    use SoftDeletes;

    protected $dates = ['deleted_at'];

}
