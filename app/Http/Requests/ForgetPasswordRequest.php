<?php

namespace App\Http\Requests;
use App\Mongodb\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class ForgetPasswordRequest extends Request
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
        if(Request::is('password/reset') ){
            return [
                'user_name_phone' => 'required'
            ];
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
}
