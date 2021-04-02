<template>
  <div class="modal">
      <div class="modal-content p-2 w-3/4 md:w-2/4">
        <div>
          <div class="flex justify-between items-center">
            <p class="text-sm">Edit your search location</p>
            <div @click="close">
              <span class="iconify red inline text-lg" data-icon="ic:round-cancel" data-inline="false" @click="toggleSearchModal"></span>
            </div>
          </div>
          <p class="mt-8 ml-2 text-sm font-semibold">Location</p>
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

        <div class="mt-8 mx-auto w-2/4 md:w-2/5">
          <p class="text-white text-center px-1 py-1 rounded-md cursor-pointer fill-red">
             <span class="iconify inline" data-icon="bx:bx-search" data-inline="false"></span>
            Search
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    close(){
      this.$emit('closeSearch')
    }
  }
}
</script>

<style>

</style>