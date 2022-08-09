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
      <v-list >
                پیشنهادات
      <template v-for="(suggestion, index) in suggestions1">

        <v-divider :inset="false"></v-divider>

        <v-list-item
          :key="suggestion.name"
        >
          <v-list-item-avatar>
            <v-img :src="suggestion.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="suggestion.suggestedPrice"></v-list-item-title>
            <v-list-item-subtitle v-html="suggestion.name"></v-list-item-subtitle>
          </v-list-item-content>

          <v-btn depressed color="primary"> پذیرش </v-btn>
        </v-list-item>
      </template>
      </v-list>
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
      suggestions: [] ,
      suggestions1: [
          {
            personId: '61e90e5a2ae64416e4cfc1f9',
            AuctionId: '10001',
            suggestedPrice: '8500000',
            status :'Suggested',
            regDate :'2022-06-25',
            name :'علی احمدی',
            tel :'0912334455',
            avatar :'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          },
            {
            personId: '61e90e5a2ae64416e4cfc1f9',
            AuctionId: '10001',
            suggestedPrice: '8600000',
            status :'Suggested',
            regDate :'2022-06-27',
            name :'رضا علوی',
            tel :'0915334455',
            avatar :'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          },
           {
            personId: '61e90e5a2ae64416e4cfc1f9',
            AuctionId: '10001',
            suggestedPrice: '8700000',
            status :'Suggested',
            regDate :'2022-06-29',
            name :'صبا حسنی',
            tel :'0916444455',
            avatar :'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          },
        ],
    }),
      async mounted() {
        this.getSuggestionsByAuction(this.auction.code)
        console.log( this.auction.code);
     },
     watch : {

     },
      methods :{
          
          getSuggestionsByAuction(auctionId) {
            axios.get(SERVER_ADDRESS + 'suggestionsByAuction/' + auctionId)
                 .then(res => {
                    this.suggestions.push.apply(this.suggestions, res.data);
                  }).catch(err => {
                    console.log('error');
                  })
        },   
      },

  }
</script>