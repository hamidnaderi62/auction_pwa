<template>

<div>
   <v-app-bar
      dark
      color="primary"
    >



     <v-avatar >
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>

      <v-list-item-title>{{ name }}</v-list-item-title>

       
      <v-toolbar-title>   </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    
</div>
</template>
<script>
  export default {
    data: () => ({
      name : '',
      tel : '',
      avatar : '',
      drawer: false,
      group: null,

    }), 
    methods : {
          logout() {
            localStorage.removeItem('userid');
            localStorage.removeItem('name');
            localStorage.removeItem('tel');
            localStorage.removeItem('avatar');
            this.$router.replace({  name : 'login-page' })
        }
     },
    async mounted() {
        this.name = await localStorage.getItem('name');
        this.tel = await localStorage.getItem('tel');
        this.avatar = await localStorage.getItem('avatar');

        
     },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>