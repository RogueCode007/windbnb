<template>
  <div class="p-4">
    <Nav />
    <div class="flex justify-between items-center mt-4">
      <p class="text-black text-lg font-bold">Stay in Nigeria</p>
      <p class="text-black text-sm ">12+ stays</p>
    </div>
    <PropertyList :properties="properties" />
     <SearchModal v-show="searchModal" v-on:closeSearch="toggleSearchModal" />
  </div>

</template>

<script>
import Nav from './Nav.vue';
import PropertyList from './components/PropertyList.vue';
import SearchModal from './components/searchModal';
import { bus } from "../app";
export default {
  components:{
    Nav,
    PropertyList,
    SearchModal
  },
  data: function(){
    return {
      searchModal: false,
      properties: []
    }
  },
  methods:{
    toggleSearchModal(){
      this.searchModal = !this.searchModal;
      console.log(this.searchModal);
    },

    getProps(){
      axios.get('api/properties')
      .then(res => {
        if(res.status == 200){
          this.properties = res.data
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getProps();
    bus.$on('showSearch',()=>{
      this.toggleSearchModal();
    });
  }

}
</script>

<style>
.red{
  color: #eb5757;
}
.fill-red{
  background-color: #eb5757;
}
.modal{
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content{
    background-color: #fff;
    margin: 10% auto;
    min-height: 350px
  }
  .input-div{
     border-color: #f2f2f2;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)
  }
</style>