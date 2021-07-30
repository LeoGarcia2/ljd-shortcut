import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localStorage from 'vue-localstorage';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  localStorage,
  render: h => h(App)
}).$mount('#app')

Vue.use(localStorage);