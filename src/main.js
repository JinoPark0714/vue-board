import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import VueCookies from 'vue-cookies';
import {store} from './common/store';


Vue.use(store);
Vue.use(VueCookies);
new Vue({
  router,
  el: '#app',
  store : store,
  render: h => h(App)
}).$mount('#app');
