<template>
  <v-form>
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


        <v-text-field  outlined  v-model="username" style="font-family:Vazir !important" label="نام کاربری"></v-text-field>
        <v-text-field  outlined  v-model="password" style="font-family:Vazir !important" label="رمز ورود"></v-text-field>
        <v-btn block  depressed color="primary" style="font-family:Vazir !important" @click="perosnLogin" >
        ورود
        </v-btn>
       
      </v-col>
    </v-card-text>

  </v-card>
   </v-form>
</template>

<script>
import axios from 'axios';

let SERVER_ADDRESS = 'http://localhost:4000/';

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
        
     },
     watch : {

     },
    methods: {

        async perosnLogin(){
          console.log('login');
          if(this.username != '' && this.password != '' ){
            await axios.post(SERVER_ADDRESS + 'login', {
            username: this.username,
            password: this.password
          })
          .then(function (response) {
            if(response.status == '201')
            {  
              localStorage.setItem('userid' , response.data[0].code);
              localStorage.setItem('name' , response.data[0].tel);
              localStorage.setItem('tel' , response.data[0].tel);
              localStorage.setItem('avatar' , response.data[0].avatar);

              this.routToMainPage();                
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });     

          } else
          {
            console.log('user or pass is empty');
          }      
        },
        routToMainPage(){
            this.$router.replace({  name : 'auction-page' })
        },
       
    },

  }
</script>