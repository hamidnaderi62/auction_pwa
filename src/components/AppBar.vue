<template>

<div>
   <v-app-bar
      dark
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> حراجی  </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="this.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title> {{ name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          @click="logout"
          link
        >
          <v-list-item-icon>
            <v-icon> mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>خروج</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
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