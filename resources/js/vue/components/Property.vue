<template>
  <div class="mt-8">
    <div class="border" style="border-radius: 24px">
      <img :src="property.image_url" alt="property-image" style="height: 250px; width: 100%; display: block; border-radius: 24px" >  
    </div>
    <div>
      <div class="flex justify-between items-center">
        <p class="text-gray-400 text-sm">{{property.type}}</p>
        <p class="text-gray-400 text-sm"><span class="iconify inline red" data-icon="ant-design:star-filled" data-inline="false"></span> {{property.rating}}</p>
      </div>
      <p class="font-semibold">{{property.description | trimLength}}</p>
      <p class="font-semibold">#{{property.price}}/night</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["property"],
  filters:{
    trimLength(param){
      if(param.length < 45){
        return param.slice(0, param.length + 1) + '                                                       '
      }
      return param.slice(0, 88) + '...'
    }
  }
}
</script>

<style scoped>
.red{
  color: #eb5757;
}
</style>