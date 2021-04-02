@extends('welcome')
@section('content')



<div class="box px-7 " id="item-box">
            @foreach($items as $item)
                <div class="item rounded-lg hover:shadow-lg">
                    <a href="/items/{{$item->id}}">
                        <img src="{{$item->image_name}}"
                        class="card-img-top mx-auto "
                        style="height: 50px; width: 100%; display: block;"
                        alt="item image">
                        <p class="price text-black font-bold text-lg">{{$item->type}}</p>
                        <p class="text-gray-400 mt-2">{{$item->description}}</p>
                    </a>
                </div>
            @endforeach
        </div>







@endsection