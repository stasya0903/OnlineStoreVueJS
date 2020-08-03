import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faUserSecret, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './plugins/fontawesome';
import Vue from 'vue';
import '../public/style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import CartDrop from "./components/CartDrop";


library.add(fab,faUserSecret,faFontAwesome,faSearch);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.component('Cart-drop',CartDrop);

new Vue({
  router,
  store,
  CartDrop,
  render: (h) => h(App),
}).$mount('#app');


