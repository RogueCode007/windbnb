<template>
  <div>
    A property
  </div>
</template>

<script>
export default {
  name: 'Property',
  data(){
    return {
      id: this.$route.params.id,
      property: {}
    }
  },
  created(){
    axios.get('api/property/' + this.id)
      .then(res => {
        if(res.status == 200){
          this.property = res.data
          console.log(this.property);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>