<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
     /**
     * Define el metodo de autenticacion de los EndPoints.
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register','logout']]);
    }

    /**
     * Comprueba las credenciales de acceso, si son correctas devuelve un access-token (JWT).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    /**
     * Muestra los datos del usuario.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Muestra el tipo de usuario.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function type()
    {
        return response()->json(['type' => auth()->user()->type]);
    }
    
   
    /**
     * Refresca el access token y lo devuelve.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Estructura el json de respuesta del access token.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    /**
     * Registra un usuario en la bd, captura nombre de usuario,email y contraseña.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|string|email|max:100|unique:users',
            'password'=>'required|string', //|confirmed
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user= User::create(array_merge(
            $validator->validate(),
            ['password'=>bcrypt($request->password)]
        ));

        return response()->json([
            'message'=>'¡Usuario registrado exitosamente!',
            'user'=>$user
        ],201);
    }
}