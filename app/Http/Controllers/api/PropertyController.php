<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Property;
use Validator;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Property::orderBy('created_at', 'DESC')->get();
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
        // Store image in s3 bucket
        $path = $request->file('image')->store('images', 's3');
        $url = Storage::disk('s3')->url($path);
        // Save property to db
        return Property::create([
            'type'=> $request->type,
            'description'=> $request->description,
            'location'=> $request->location,
            'rating'=> '3.4',
            'image_url'=> $url,
        ]);
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
        $property = Property::find($id);
        if($property){

            if($request->file('image')){
                //Get file path of the property image, delete property image from s3 bucket
                $file_path = parse_url($property->image_url);
                Storage::disk('s3')->delete($file_path);

                // Store new image in s3 bucket
                $path = $request->file('image')->store('images', 's3');
                $url = Storage::disk('s3')->url($path);
                $property->image_url = $url;
            }
        
            // Update property in db;
            $property->type = $request->type;
            $property->description = $request->description; 
            // $property->rating = $request->rating;
            $property->location = $request->location;
            $property->save();
            return $property;
        }
        return response(["message"=> "Item not found"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $property = Property::find($id);
        if($property){
            //Get file path and delete property image from s3 bucket
            $file_path = parse_url($property->image_url);
            Storage::disk('s3')->delete($file_path);
            //Delete poperty from db
            $property->delete();
            return response(["message"=> "Property deleted"]);
        }
        
        return response(["message"=> "Item not found"]);
    }
}
