<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    grow
  >
    <v-btn to="/auctionpage">
      <span>لیست همه</span>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-btn to="/myauctionpage">
      <span>لیست من</span>
      <v-icon>mdi-playlist-star</v-icon>
    </v-btn>

    <v-btn to="/auctioncreatepage">
      <span>جدید</span>
      <v-icon>mdi-pencil</v-icon>
    </v-btn>


  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>