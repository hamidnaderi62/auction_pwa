<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >


    <v-card-text>

    <v-col cols="12" align="center" justify="space-around" >
    <v-text-field outlined :rules="[rules.required]"  v-model="title" style="font-family:Vazir !important" label="عنوان"></v-text-field>
    <v-text-field outlined :rules="[rules.required]" v-model="basePrice" style="font-family:Vazir !important" label="قیمت پایه"></v-text-field>
    <v-text-field outlined :rules="[rules.required, rules. deadline]" v-model="availableDays" style="font-family:Vazir !important" label="مدت"></v-text-field>
    <v-textarea outlined  v-model="features" style="font-family:Vazir !important" label="خصوصیات"></v-textarea>
    <v-textarea outlined  v-model="desc" style="font-family:Vazir !important" label="توضیحات"></v-textarea>
    <v-text-field outlined :rules="[rules.required]" v-model="image1" style="font-family:Vazir !important" label="آدرس تصویر 1"></v-text-field>
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
      rules : {
        required: value => !!value || 'ورود این فیلد الزامی است',
        min: v => v.length >= 3|| 'حداقل طول  3 کارکتر می باشد',
        deadline: value => value > 0|| 'تعداد روز باید حداقل برابر با یک باشد',
      },
       
    }),

    methods: {

        createAuction(){
          if(localStorage.getItem('userid')){
            axios.post(this.$SERVER_ADDRESS + 'auction', {
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
          .then((response) =>{
            this.$root.SnackBar.show({message: 'درخواست فروش شما ثبت شد'});
          })
          .catch((error) => {
            console.log(error);
          });     

          }      
        },
    },

  }
</script>