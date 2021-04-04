<template>
  <div>
    <nav class="md:flex md:justify-between md:items-center md:mx-5">
      <p class="text-lg red">
        <span class="iconify red inline" data-icon="jam:triangle-f" data-inline="false"></span>
        windbnb
      </p>
      <div class="nav-input rounded-full py-3 px-6 md:py-2 border flex align-center justify-between mt-5">
        <input type="text" placeholder="lagos" class="bg-white w-full" @click="displaySearch">
        <span class="iconify inline red text-2xl " data-icon="bx:bx-search" data-inline="false"></span>
      </div> 
    </nav>
  </div>
    
</template>

<script>

import { bus } from '../app';
export default {
  methods:{
    displaySearch(){
      bus.$emit('showSearch')
    }
  }
}
</script>

<style scoped>
div.nav-input{
  border-color: #f2f2f2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)
}
.nav-input input{
  border: none;
  outline: none;
}
</style>