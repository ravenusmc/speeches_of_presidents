import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret, faHashtag, faPencilAlt, faCodeBranch, faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleCharts from 'vue-google-charts'

// Google charts plugin
Vue.use(VueGoogleCharts);

library.add(faUserSecret,
  faHashtag,
  faPencilAlt,
  faCodeBranch,
  faNetworkWired);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
