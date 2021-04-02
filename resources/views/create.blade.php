@extends('welcome')
@section('content')

<form action="/property/store" method="POST" enctype="multipart/form-data" class="form bg-white rounded-lg hover:shadow-lg lg:my-8 lg:mx-auto">
    @csrf 
    <div class="mb-5">
      <label for="name" class="block text-sm font-medium text-gray-700">Property type:</label>
      <div class="mt-1 relative">
        <input type="text" name="type" class="focus:outline-none focus:border-b-2 focus:border-blue-300 h-8 block w-full lg:w-3/4 sm:text-sm border-gray-400 border-b-2" value="{{old('type') ?? '' }}">
      </div>
      @error('type')
        <div class="text-red-600">{{ $message }}</div>
      @enderror
    </div>

    <div class="mb-5">
      <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity:</label>
      <div class="mt-1 relative">
        <input type="text" name="description" class="focus:outline-none focus:border-b-2 focus:border-blue-300 h-8 block w-full lg:w-3/4 sm:text-sm border-gray-400 border-b-2" value="{{old('description') ?? '' }}">
      </div>
      @error('description')
        <div class="text-red-600">{{ $message }}</div>
      @enderror
    </div>

    <div class="mb-5">
      <label for="item-image" class="block text-sm font-medium text-gray-700">Item image*:</label>
      <div class="mt-1 relative ">
        <input type="file" name="image" class="">
      </div>
      @error('image')
        <div class="text-red-600">{{ $message }}</div>
      @enderror
    </div>

    <button class="text-white bg-green-600 p-2.5 rounded-sm"><span class="iconify inline text-xl mr-2" data-icon="octicon:diff-added-16" data-inline="true"></span>Add Item</button>
  </form>





@endsection