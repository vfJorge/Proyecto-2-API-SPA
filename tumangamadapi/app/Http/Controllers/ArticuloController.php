<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articulo;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('api', ['except' => ['index']]);
    }

    public function index()
    {
        $articulos = Articulo::all();
        return $articulos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $articulo = Articulo::findOrFail($request->id);

        if($request->has('type'))$articulo->type = $request-> type; 
        if($request->has('name'))$articulo->name = $request-> name;
        if($request->has('img'))$articulo->img = $request-> img;
        if($request->has('price'))$articulo->price = $request-> price;
        if($request->has('stockQty'))$articulo->stockQty = $request-> stockQty;

        $articulo->save();
        return $articulo;
    }

    /**
     * Remove the specified resource from storage.
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
