<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >


    <v-card-text>

    <v-col cols="12" align="center" justify="space-around" >
    <v-text-field outlined  v-model="title" style="font-family:Vazir !important" label="عنوان"></v-text-field>
    <v-text-field outlined  v-model="basePrice" style="font-family:Vazir !important" label="قیمت پایه"></v-text-field>
    <v-text-field outlined  v-model="availableDays" style="font-family:Vazir !important" label="مدت"></v-text-field>
    <v-textarea outlined  v-model="features" style="font-family:Vazir !important" label="خصوصیات"></v-textarea>
    <v-textarea outlined  v-model="desc" style="font-family:Vazir !important" label="توضیحات"></v-textarea>
    <v-text-field outlined  v-model="image1" style="font-family:Vazir !important" label="آدرس تصویر 1"></v-text-field>
    <v-text-field outlined  v-model="image2" style="font-family:Vazir !important" label="آدرس تصویر 2"></v-text-field>
    <v-text-field outlined  v-model="image3" style="font-family:Vazir !important" label="آدرس تصویر 3"></v-text-field>
      <v-btn block  depressed color="primary" style="font-family:Vazir !important" @click="createAuction" >
        ثبت
      </v-btn>
    </v-col>
    
  

    </v-card-text>
  </v-card>
</template>

<script>

import axios from 'axios';

let SERVER_ADDRESS = 'http://localhost:4000/';

  export default {
    components : {
  },
    props: [ 'auction'],
    data: () => ({
      title : '',
      basePrice : '',
      availableDays : '',
      desc : '',
      features : '',
      image1 : '',
      image2 : '',
      image3 : '',    
    }),
      async mounted() {
     },
     watch : {

     },
    methods: {

        createAuction(){
          console.log('comments');
          if(localStorage.getItem('userid')){
            console.log(localStorage.getItem('userid'));
            axios.post(SERVER_ADDRESS + 'auction', {
            title : this.title,
            desc : this.desc,
            features : this.features,
            basePrice : this.basePrice, 
            image1 : this.image1,
            image2 : this.image2,
            image3 : this.image3,
            availableDays : this.availableDays,
            personID : localStorage.getItem('userid')
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });     

          }      
        },

       
    },

  }
</script>