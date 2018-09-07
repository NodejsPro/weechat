<?php

namespace App\Http\Requests;
use App\Mongodb\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class UserRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $input = $this->all();
        //update
        if(Request::isMethod('put') && Request::is('user/*') ){
            $userId = Request::route()->parameter('user');
            $validation = [
                'authority' => 'required',
                'phone' => "required|max:50|unique:users,phone,$userId,_id,deleted_at,NULL",
            ];
            if(Auth::user()->id != $userId){
                $validation = array_merge($validation, $this->validateAction($input, $userId));
            }
            return $validation;
        }elseif(Request::is('account/*') ){
                //update my account with link is account/edit
            $user_id = Auth::user()->id;
            $rule = [
                'user_name'                  => "required|min:6|unique:users,user_name,$user_id,_id,deleted_at,NULL",
                'phone'                   => "required|max:50|unique:users,phone,$user_id,_id,deleted_at,NULL",
            ];
            if(!empty($input['password'])){
                $rule['password'] = 'min:6|regex:/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-]).*$/';
            }
            return $rule;
        }else {
            //create  new user
            $validation = [
                'authority' => 'required',
                'phone' => 'required|max:50|unique:users,phone,NULL,id,deleted_at,NULL',
            ];
            $validation = array_merge($validation, $this->validateAction($input));
            return $validation;
        }
    }

    public function validateAction($input, $user_id = null){
        if ($user_id != null) {
            $user = User::where('_id', $user_id)->first();
        }
        $user_authority = config('constants.authority');
        $authority = Auth::user()->authority;
        $validation = array();
        $validation['authority'] = 'required';
        $validation['time_save_log'] = 'required|in:' . implode(',', array_values(config('constants.time_save_log')));
        //edit user
        if(isset($user_id)){
            $validation['user_name'] = "required|min:6|unique:users,user_name,$user_id,_id,deleted_at,NULL";
            if(isset($input['password'])){
                $validation['password'] = 'min:6|regex:/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-]).*$/';
            }
            // create user
        }else{
            if(isset($input['user_name']) || isset($input['password'])){
                $validation['user_name'] = 'required|min:6|unique:users,user_name,NULL,id,deleted_at,NULL';
                $validation['password'] = 'required|min:6|regex:/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-]).*$/';
            }
        }
        $authority_arr = config('constants.authority');
        if($authority == $user_authority['super_admin']){
            unset($authority_arr['super_admin']);
        }elseif($authority == $user_authority['admin_lv1']){
            unset($authority_arr['super_admin']);
            unset($authority_arr['admin_lv1']);
        }elseif($authority == $user_authority['admin_lv2']){
            unset($authority_arr['super_admin']);
            unset($authority_arr['admin_lv1']);
            unset($authority_arr['admin_lv2']);
        }
        $validation['authority'] = 'required|in:'.implode(',', $authority_arr);
        return $validation;
    }
}
