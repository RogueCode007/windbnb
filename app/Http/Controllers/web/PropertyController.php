<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Property::all();
        return view('index', ['items'=> $items]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->flash();
    
        try{
            $request->validate([
                'type'=> 'bail|required|string|max:100',
                'description'=> 'bail|required|string',
                'image'=> 'bail|required|image'
            ]);
        }catch(Throwable $e){
            return redirect()->routes('addItem')->withInput();
        }
        
        $image = $request->image;
        $imageName  = $image->getClientORiginalName();
        $filepath = '/item'.$imageName;
        Storage::disk('s3')->put($filepath, file_get_contents($image));
        // $path = $request->file('image')->store('images', 's3');
        Property::create([
            'type'=> $request->type,
            'description'=> $request->description,
            'image_name'=> $imageName,
        ]);
        return redirect('/properties')->with('success', 'Item added to store!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
