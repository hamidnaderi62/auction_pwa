<template>
<v-row justify="space-around" class="py-4">
  <v-col cols="4" align="center" justify="space-around">
    <v-row justify="space-around">
     <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>  
    </v-row>
    <v-row justify="space-around">
      Hamid Na
    </v-row>  
   </v-col>

   <v-col cols="8" align="center" justify="space-around">
    <div class="d-flex justify-space-between text-caption">
      
      <div>
        <div class="grey--text mb-2">
          (100) Followers
        </div>
        <div class="grey--text mb-2">
          (4) Boards
        </div>
      </div>

      <div>
        <div class="grey--text mb-2">
          (200) Following
        </div>
        <div class="grey--text mb-2">
          (30) Items
        </div>
      </div>

    </div>
   </v-col>
</v-row>   
</template>
<script>
  export default {
    data: () => ({
      profileInfo: [],
      
    }),
    methods : {

         getProfileInfo() {
            axios.get(SERVER_ADDRESS + 'api/v1/profileInfo')
                 .then(res => {
                    console.log( res.data);
                    this.profileInfo.push.apply(this.profileInfo, res.data.data);
                  }).catch(err => {
                    console.log('error');
                  })
        },
     },
    mounted(){
      this.getProfileInfo();
    }
  }
</script>