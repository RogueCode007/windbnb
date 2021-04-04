<template>
  <div class="modal">
      <div class="modal-content search-modal p-4 w-3/4 md:w-full ">
        <div class="flex justify-between items-center">
          <p class="text-sm">Edit your search location</p>
          <div @click="close" class="cursor-pointer">
            <span class="iconify red inline text-lg" data-icon="ic:round-cancel" data-inline="false"></span>
          </div>
        </div>
        <div class="lg:flex lg:justify-between lg:items-start lg:mt-8">
          <div class="lg:w-1/3 lg:mx-2">
            <p class="mt-8 ml-2 text-sm font-semibold lg:mt-0">Location</p>
            <div class="border input-div rounded-full py-2 px-6">
              <input type="text" class="border-none outline-none w-full">
            </div>
            <p class="my-4 cursor-pointer text-gray-500">
              <span class="iconify inline" data-icon="carbon:location-heart-filled" data-inline="false"></span>
              Lagos, Nigeria
            </p>
            <p class="my-4 cursor-pointer text-gray-500">
              <span class="iconify inline" data-icon="carbon:location-heart-filled" data-inline="false"></span>
              Ibadan, Nigeria
            </p>
            <p class="my-4 cursor-pointer text-gray-500">
              <span class="iconify inline" data-icon="carbon:location-heart-filled" data-inline="false"></span>
              Abuja, Nigeria
            </p>
          </div>
          <div class="lg:w-1/3 lg:mx-2">
            <div class="border p-2 input-div">
              <p class="font-semibold">Guests</p>
              <span>{{guests}} guests</span>
            </div>
            <div class="mt-4">
              <p class="">Adults</p>
              <span class="text-sm text-gray-500">Ages 13 and above</span>
              <div>
                <div class="inline mr-4" @click="incrementAdults">
                  <span class="iconify inline text-lg" data-icon="ant-design:plus-square-outlined" data-inline="false"></span>
                </div>
                <span>{{adult}}</span>
                <div class="inline ml-4" @click="decrementAdults">
                  <span class="iconify inline text-lg" data-icon="ant-design:minus-square-outlined" data-inline="false"></span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="">Children</p>
              <span class="text-sm text-gray-500">Ages 12 and below</span>
              <div>
                <div class="inline mr-4" @click="incrementChildren">
                  <span class="iconify inline text-lg" data-icon="ant-design:plus-square-outlined" data-inline="false"></span>
                </div>
                <span>{{children}}</span>
                <div class="inline ml-4" @click="decrementChildren">
                  <span class="iconify inline text-lg" data-icon="ant-design:minus-square-outlined" data-inline="false"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 mx-auto w-2/4 md:w-2/5 lg:w-1/3 lg:mt-0 lg:mx-2 lg:px-8">
            <p class="text-white text-center px-1 py-1 rounded-md cursor-pointer fill-red">
              <span class="iconify inline" data-icon="bx:bx-search" data-inline="false"></span>
              Search
            </p>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      adult: 0,
      children: 0,
      guests: 0
    }
  },
  methods:{
    close(){
      this.$emit('closeSearch')
    },
    incrementAdults(){
      this.adult++;
      this.guests = this.adult + this.children;
    },
    incrementChildren(){
      this.children++;
      this.guests = this.adult + this.children;
    },
    decrementAdults(){
      this.adult--;
      this.guests = this.adult + this.children;
    },
    decrementChildren(){
      this.children--;
      this.guests = this.adult + this.children;
    },
  }
}
</script>

<style>

</style>