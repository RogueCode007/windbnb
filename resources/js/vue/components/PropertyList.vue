<template>
  <div class="properties mt-6">
    <div v-for="property in  properties" :key="property.id" >
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
  mounted(){
    console.log(this.properties);
  }

}
</script>

<style scoped>


</style>