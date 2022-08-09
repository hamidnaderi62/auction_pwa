<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >


    <v-card-text>
      <v-col cols="12" align="center" justify="space-around" >


        <v-avatar size="128">
          <img
            :src="require('../assets/logo.png')"
            alt="Auction"
          >
        </v-avatar>

        <v-text-field outlined  v-model="username" style="font-family:Vazir !important" label="نام کاربری"></v-text-field>
        <v-text-field outlined  v-model="password" style="font-family:Vazir !important" label="رمز ورود"></v-text-field>
        <v-btn block  depressed color="primary" style="font-family:Vazir !important" @click="loginUser" >
        ورود
        </v-btn>
      </v-col>
    </v-card-text>

  </v-card>
</template>

<script>
import axios from 'axios';

let SERVER_ADDRESS = 'http://localhost:8080/';

  export default {
    components : {
  },
    props: [ 'auction'],
    data: () => ({
      username : '',
      password : '',     
    }),
      async mounted() {
        console.log( 'mounted');
        await localStorage.setItem('userid' , 'P_2');
     },
     watch : {

     },
    methods: {

        loginUser1(){
          console.log('comments');
          if(localStorage.getItem('userid')){
            console.log(localStorage.getItem('userid'));
            axios.post(SERVER_ADDRESS + 'api/v1/registerComment', {
            user:  localStorage.getItem('userid'),
            board: this.board._id,
            comment : this.newComment
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });     

          }      
        },
        loginUser(){
          console.log('route to auction page');
          this.$router.replace({  name : 'auction-page' })
        },

       
    },

  }
</script>