<template>
  <div class="p-4">
    <Nav />
    <div class="flex justify-between items-center mt-4 md:mx-5">
      <p class="text-black text-lg font-bold">Stay in Nigeria</p>
      <p class="text-black text-md cursor-pointer" @click="toggleHomeModal">
        <span class="iconify inline red text-lg" data-icon="bi:plus-circle-fill" data-inline="false"></span>
        Add home</p>
    </div>
     <PropertyList :properties="properties" />
     <SearchModal v-show="searchModal" v-on:closeSearch="toggleSearchModal" />
     <AddHomeModal v-show="addhomeModal" v-on:closeModal="toggleHomeModal" v-on:itemAdded="addItem" v-on:refresh="getProps"/>
     <Loading v-show="loading" />
  </div>

</template>

<script>
import Nav from './Nav.vue';
import PropertyList from './components/PropertyList.vue';
import SearchModal from './components/searchModal';
import AddHomeModal from './components/addHomeModal';
import Loading from './components/loading';
import { bus } from "../app";
export default {
  components:{
    Nav,
    PropertyList,
    SearchModal,
    AddHomeModal,
    Loading
  },
  data: function(){
    return {
      searchModal: false,
      addhomeModal: false,
      loading: true,
      properties: []
    }
  },
  methods:{
    toggleSearchModal(){
      this.searchModal = !this.searchModal;
      console.log(this.searchModal);
    },
    toggleHomeModal(){
      this.addhomeModal = !this.addhomeModal;
    },
    addItem(){
      this.toggleHomeModal();
      this.loading = true;
    },
    getProps(){
      axios.get('api/properties')
      .then(res => {
        if(res.status == 200){
          this.properties = res.data
        }
      })
      .then(()=>{
        this.loading = false;
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
    margin: 5% auto;
    min-height: 350px;
    overflow-y: hidden;
  }
  .loading-modal{
    min-height: 350px;
    
  }
  
  .input-div{
    border-color: #f2f2f2;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)
  }
  @media only screen and (min-width: 768px){
    .search-modal{
      margin: 0
    }
    
  }
</style>