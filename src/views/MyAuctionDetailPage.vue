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
      <template v-for="(suggestion, index) in suggestions">

        <v-divider :inset="false"></v-divider>

        <v-list-item
          :key="suggestion.code"
        >


          <v-list-item-content>
            <v-list-item-title v-html="suggestion.suggestedPrice"></v-list-item-title>
          </v-list-item-content> 
          <v-btn depressed color="primary" @click="acceptSuggestion(suggestion.code )"> پذیرش </v-btn>
        </v-list-item>
      </template>
      </v-list>
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
      suggestions: [] ,
      name :'',
      tel :'',
      avatar :'',          
      }),
      async mounted() {
        await this.getSuggestionsByAuction(this.auction.code);
     },
      methods :{
          
      async getSuggestionsByAuction(auctionId) {
            await axios.get(this.$SERVER_ADDRESS + 'suggestionsByAuction/' + auctionId)
                 .then(res => {
                    this.suggestions.push.apply(this.suggestions, res.data);
                  }).catch(err => {
                    console.log('error');
                  })
        },   

      async getPerson(personId) {
            await axios.get(this.$SERVER_ADDRESS + 'person/' + personId)
                 .then(res => {
                    this.name = res.data.name;
                    this.tel = res.data.tel;
                    this.avatar = res.data.avatar;

                    //this.persons.push.apply(this.persons, res.data);
                  }).catch(err => {
                    console.log('error');
                  })
        }, 

        async showPersonInfo(suggestionId , personId) {
            console.log(suggestionId)
            //this.activeSuggestion = suggestionId;
            await this.getPerson(personId);
            console.log(this.name)
                 
        },   

        async acceptSuggestion(suggestionId ){
          await axios.post(this.$SERVER_ADDRESS + 'acceptSuggestion', {
            suggestionId: suggestionId,
            })
            .then((response) => { 
              this.$root.SnackBar.show({message: 'پیشنهاد منتخب ثبت شد'});
            })
            .catch((error) => {
              console.log(error);
            })     
        },
      }  
  }
</script>