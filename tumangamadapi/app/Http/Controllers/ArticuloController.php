<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articulo;

class ArticuloController extends Controller
{
    /**
     * Define el metodo de autenticacion de los EndPoints.
     */
    public function __construct()
    {
        $this->middleware('api', ['except' => ['index']]);
    }
    /**
     * Despliega todos los articulos de la bd.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articulos = Articulo::all();
        return $articulos;
    }

    
    /**
     * Agrega un nuevo articulo en la bd.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $articulo = new Articulo();
        $articulo->type = $request-> type;
        $articulo->name = $request-> name;
        $articulo->img = $request-> img;
        $articulo->price = $request-> price;
        $articulo->stockQty = $request-> stockQty;

        $articulo->save();
    }

    /**
     * Muestra un articulo seleccionado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $articulo = Articulo::findOrFail($request->id);
        return $articulo;
    }


    /**
     * Actualiza los datos de un articulo seleccionado en la bd.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $articulo = Articulo::findOrFail($request->id);

        if($request->has('type') && !empty($request->input('type')))$articulo->type = $request-> type; 
        if($request->has('name')&& !empty($request->input('name')))$articulo->name = $request-> name;
        if($request->has('img')&& !empty($request->input('img')))$articulo->img = $request-> img;
        if($request->has('price')&& !empty($request->input('price')))$articulo->price = $request-> price;
        if($request->has('stockQty')&& !empty($request->input('stockQty')))$articulo->stockQty = $request-> stockQty;

        $articulo->save();
        return $articulo;
    }

    /**
     * Borra el articulo seleccionado de la bd.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
       $articulo = Articulo::destroy($request->id);
       return $articulo;
    }
}
