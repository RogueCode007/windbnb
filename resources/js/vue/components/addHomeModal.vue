<template>
  <div class="modal">
      <div class="modal-content p-4 w-3/4 md:w-2/4">
        <div>
          <div class="flex justify-between items-center">
            <p class="text-sm">Add a new property</p>
            <div @click="close" class="cursor-pointer">
              <span class="iconify red inline text-lg" data-icon="ic:round-cancel" data-inline="false"></span>
            </div>
          </div>
          <p class="mt-8 ml-2 text-sm font-semibold">Property type</p>
          <span v-show="error.type" class="text-sm text-red-500">This field cannot be empty</span>
          <div class="border input-div rounded-full py-2 px-6">
            <input type="text" class="border-none outline-none w-full" v-model="property.type">
          </div>
          <p class="mt-8 ml-2 text-sm font-semibold">Property description (at least 20 words)</p>
          <span v-show="error.description" class=" text-sm text-red-500">The description should contain at least 50 words</span>
          <div :class="[property.description.length < 50 ? 'border-red-500' : 'border-green-500', 'border','py-2','px-6', 'text-area']">
             <textarea v-model="property.description" cols="30" rows="5" class="border-none outline-none w-full"></textarea>
          </div>
          <p class="mt-8 ml-2 text-sm font-semibold">Property location</p>
          <span v-show="error.location" class=" text-sm text-red-500">Location cannot be empty</span>
          <div class="border">
            <select v-model="property.location">
              <option disabled value="">Please select one</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Ibadan</option>
            </select>
          </div>
          <p class="mt-8 ml-2 text-sm font-semibold">Property image</p>
          <div class="border">
            <input type="file" ref='file' v-on:change="handleFileUpload">
          </div>      
        </div>

        <div class="mt-8 mx-auto w-2/4 md:w-2/5">
          <p class="text-white text-center px-1 py-1 rounded-md cursor-pointer bg-green-500" @click="handleError">
             <span class="iconify inline" data-icon="bi:house-fill" data-inline="false"></span>
            Submit
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      property: {
        type: '',
        description: '',
        location: '',
        image: ''
      },
      error:{
        type: false,
        description: false,
        location: false
      }
    }
  },
  methods:{
    close(){
      this.$emit('closeModal');
    },
    handleFileUpload(){
      this.property.image = this.$refs.file.files[0]
    },
    handleError(){
      if(true){
        if(this.property.description.length <= 50){
          return this.error.description = true;
        }else{
          this.error.description = false
        } 
        if(this.property.type == ""){
          return this.error.type = true;
        }else{
          this.error.type = false
        }
        if(this.property.location == ""){
         return this.error.location = true;
        }else{
          this.error.location = false
        }
        this.$emit('itemAdded');
        this.submitForm();
      }
      
    },
    submitForm(){       
        let formData = new FormData;
        formData.append('image', this.property.image);
        formData.append('type', this.property.type);
        formData.append('location', this.property.location);
        formData.append('description', this.property.description);
        axios.post('api/property/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res=>{
          if(res.status == 201){
            console.log('added');
            this.$emit('refresh')
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }
  }
}
</script>

<style>
.text-area{
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)
}
</style>