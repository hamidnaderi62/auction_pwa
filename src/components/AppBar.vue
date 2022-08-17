<template>

<div>
   <v-app-bar
      dark
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> حراجی من </v-toolbar-title>
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
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
    }), 
    async mounted() {
        this.name = await localStorage.getItem('name');
        this.tel = await localStorage.getItem('tel');
        this.avatar = await localStorage.getItem('avatar');
        console.log( 'mounted');
        
     },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>