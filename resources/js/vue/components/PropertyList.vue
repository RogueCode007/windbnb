<template>
  <div class="properties mt-6">
    <div v-for="property in  properties" :key="property.id" class="property cursor-pointer">
        <Property :property="property" /> 
    </div>
  </div>
</template>

<script>
import Property from './Property.vue';
export default {
  components:{
    Property
  },
  props:["properties"],
}
</script>

<style scoped>
@media only screen and (min-width:768px){
  .property{
  width: 40%;
  margin: 5%;
  display: inline-block;
  }

}

@media only screen and (min-width:1024px){
  .property{
    width: 30%;
    margin: 1.667%;
  }
}

</style>