<template>

<div>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    

      <v-container>
      <v-row dense>
            <auction-item v-for="auction in auctions" :key="auction.index" :auction="auction"></auction-item>
 
      </v-row>
    </v-container>

  </v-card>

</div>
</template>

<script>
  let SERVER_ADDRESS = 'http://localhost:4000/';
  import axios from 'axios';
  import AuctionItem from '../components/AuctionItem.vue'
  export default {
    components : {
      AuctionItem,
    },
        data: () => ({
        auctions :[],  
      }),
      methods :{
          
          getAuctionsByPerson(personId) {
            axios.get(SERVER_ADDRESS + 'auctionsByPerson/' + personId)
                 .then(res => {
                    this.auctions.push.apply(this.auctions, res.data);
                  }).catch(err => {
                    console.log('error');
                  })
        },   
      },
      async  mounted(){
          console.log('MMMounted');
          this.getAuctionsByPerson(localStorage.getItem('userid'));  
          
          } ,
  }

</script>