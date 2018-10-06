<?php

namespace App\Http\Controllers;

use App\Mongodb\LogMessage;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
class BotController extends Controller
{
    protected $repConnect;
    protected $repConnectPage;
    protected $repUser;
    protected $repScenario;
    protected $repScenarioGroup;

    protected $repTest;
    protected $repMenu;
    protected $repMaster;
    protected $repPlan;
    protected $common;
    protected $repTimezone;
    protected $repBotRole;
    protected $file_manager;

    protected $repLibrary;
    protected $repGoogleSheetUser;

    public function __construct(
    )
    {
    }

    public function index($view_user_id = null){

    }

    public function show($view_user_id = null)
    {
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function update(Request $request, $id){

    }

    public function edit($id){
    }

    public function destroy($id){
    }

}