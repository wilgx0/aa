import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'

import promise from 'es6-promise';
promise.polyfill();
import axios from 'axios'
import qs from 'qs'
import store from './store/index.js'
import './validate.js'


Vue.use(Mint);
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$url = 'http://www.lhzs.my';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
