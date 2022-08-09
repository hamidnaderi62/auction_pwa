<template>
  <v-card>
    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="i in 5"
        :key="i"
        :value="'mobile-tabs-5-' + i"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-3"
            class="primary--text"
          >
            <v-icon>mdi-account-box</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-4"
            class="primary--text"
          >
            <v-icon>mdi-account-box</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-5"
            class="primary--text"
          >
            <v-icon>mdi-account-box</v-icon>
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

   
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>