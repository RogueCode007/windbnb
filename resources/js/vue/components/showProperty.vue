<template>
  <div class="p-4">
    <Nav />
    <div class="mt-8 prop-box md:mx-auto">
      <p class="text-xl font-semibold">{{property.type}}</p>
      <div class="flex justify-between items-center">
        <div class="">
          <p class="text-gray-400 text-sm inline"><span class="iconify inline red" data-icon="ant-design:star-filled" data-inline="false"></span> {{property.rating}}</p>
          <p class="inline text-gray-900 text-sm ml-3">{{property.location}}</p>
        </div>
        <div class="w-5/12 text-right">
          <p class="text-xs inline"><span class="iconify inline" data-icon="akar-icons:share-box" data-inline="false"></span> Share</p>
          <p class="text-xs ml-2 inline"><span class="iconify inline" data-icon="akar-icons:heart" data-inline="false"></span> Save</p>
        </div>
      </div>
      <div class="border mt-6" style="border-radius: 24px">
        <img :src="property.image_url" alt="property-image" style="height: 250px; width: 100%; display: block; border-radius: 24px" >  
      </div>
      <div class="mt-8 p-4 border-b-2 border-solid">
        <p>{{property.description}}</p>
      </div>
      <div class="mt-8 feature-box">
        <div class="feature flex items-start">
          <p class="inline text-xl"><span class="iconify" data-icon="ion:sparkles-outline" data-inline="false"></span></p>
          <div class="inline ml-3">
            <p class="text-md font-semibold">Enhanced Clean</p>
            <p class="text-xs text-gray-500">This host committed to Airbnb's 5-step enhanced cleaning process. <span class="underline">Learn more</span></p>
          </div>
        </div>
        <div class="feature flex items-start mt-6">
          <p class="inline text-xl"><span class="iconify" data-icon="bi:door-open" data-inline="false"></span></p>
          <div class="inline ml-3">
            <p class="text-md font-semibold">Self check-in</p>
            <p class="text-xs text-gray-500">You can check in with the doorman.</p>
          </div>
        </div>
        <div class="feature flex items-start mt-6">
          <p class="inline text-xl"><span class="iconify" data-icon="icons8:cancel-2" data-inline="false"></span></p>
          <div class="inline ml-3">
            <p class="text-md font-semibold">Cancellation Policy</p>
            <p class="text-xs text-gray-500">Add your trip dates to get the cancellation details for this stay.</p>
          </div>
        </div>
        <div class="feature flex items-start mt-6">
          <p class="inline text-xl"><span class="iconify" data-icon="ic:outline-policy" data-inline="false"></span></p>
          <div class="inline ml-3">
            <p class="text-md font-semibold">House Rules</p>
            <p class="text-xs text-gray-500">The host doesn’t allow pets, parties, or smoking.<span class="underline"> Get details</span></p>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if='loading' />
  </div>
</template>

<script>
import Nav from '../Nav.vue';
import Loading from './loading';
export default {
  name: 'Property',
  components:{Loading, Nav},
  data(){
    return {
      id: this.$route.params.id,
      property: {},
      loading: true
    }
  },
  created(){
    axios.get(this.id)
      .then(res => {
        if(res.status == 200){
          this.property = res.data
          console.log(this.property);
        }
      })
      .then(()=>{
        this.loading = false
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
@media only screen and (min-width: 768px){
  .prop-box{
    max-width: 500px;
  ;
  }
}
</style>