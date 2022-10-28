import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$SERVER_ADDRESS = 'http://localhost:4001/';
Vue.prototype.$Lang = 'fa';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

