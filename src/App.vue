<template>
  <v-app>
    <AppBar v-if="!['login-page'].includes($route.name)"></AppBar>
    <v-main>
      <router-view/>    
    </v-main>

  <SnackBar ref="SnackBar"/>
  <BottomNavigation v-if="!['login-page'].includes($route.name)"></BottomNavigation>
  </v-app>
  
</template>

<script>
import AppBar from './components/AppBar.vue'
import BottomNavigation from './components/BottomNavigation.vue'
import SnackBar from './components/SnackBar.vue'
export default {
  components : {
      BottomNavigation,
      AppBar,
      SnackBar,
  },
  name: 'App',
  data: () => ({
    //
  }),
  mounted() {
      this.$root.SnackBar = this.$refs.SnackBar
    },
};
</script>
