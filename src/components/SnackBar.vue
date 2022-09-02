<template>
  <v-snackbar
      :color="color"
      :timeout="timer"
      v-model="showSnackbar"
      bottom
      right
  >
    {{message}}
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  data() {
    return{
      showSnackbar: false,
      message: '',
      color: 'success',
      timer: 2000
    }
  },
  methods:{
    show(data) {
      this.message = data.message || ''
      this.color = data.color || 'success'
      this.timer = data.timer || 3000
      this.showSnackbar = true
    }
  }
}
</script>