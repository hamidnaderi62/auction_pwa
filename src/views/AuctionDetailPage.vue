<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >


    <v-carousel
      height="250"
      :show-arrows="false"
    >
      <v-carousel-item
        :key="1"
        :src="auction.image1"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>

      <v-carousel-item
        :key="2"
        :src="auction.image2"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>

      <v-carousel-item
        :key="3"
        :src="auction.image3"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>


    <v-card-title>{{auction.title}}</v-card-title>

    <v-card-text>

     <div style="font-family:Vazir !important" class="my-4 text-subtitle-2">
        قیمت پایه : 
        {{auction.basePrice}}
        تومان 
      </div>

      <div style="font-family:Vazir !important" class="my-4 text-subtitle-2">
        {{auction.features}}
      </div>

    
    <v-col cols="12" align="center" justify="space-around" >
    <v-text-field outlined  v-model="suggestedPrice" style="font-family:Vazir !important" label="قیمت پیشنهادی ..."></v-text-field>
      <v-btn block  depressed color="primary" style="font-family:Vazir !important" @click="suggestPrice" id="send-comment" >
        پیشنهاد قیمت
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
      suggestedPrice: 0,
    }),
    methods: {

        async suggestPrice(){
          if(localStorage.getItem('userid')){
            await axios.post(this.$SERVER_ADDRESS + 'suggestion', {
            lang : this.$Lang,  
            personID:  localStorage.getItem('userid'),
            auctionID: this.auction.code,
            suggestedPrice : this.suggestedPrice
          })
          .then(response  =>{
            if(response.status == 201){
              this.$root.SnackBar.show({message: 'پیشنهاد قیمت شما با موفقیت ثبت شد'});
            }
            else{
              this.$root.SnackBar.show({message: response.data.message});
            }
            
            
          })
          .catch((error) => {
            console.log(error);
          });   
           

          }      
        },

       
    },

  }
</script>