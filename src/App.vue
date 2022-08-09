<template>
  <v-app>
    <AppBar v-if="!['login-page'].includes($route.name)"></AppBar>
    <v-main>
      <router-view/>    
    </v-main>

  <BottomNavigation v-if="!['login-page'].includes($route.name)"></BottomNavigation>
  </v-app>
  
</template>

<script>
import AppBar from './components/AppBar.vue'
import BottomNavigation from './components/BottomNavigation.vue'
export default {
  components : {
      BottomNavigation,
      AppBar,
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
