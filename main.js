import './style.css'
import Vue from "vue";
import App from "./src/App.vue";
import VueRouter from 'vue-router'
import { router } from './src/routes';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import Paginate from 'vuejs-paginate';


//Registramos el router
Vue.use(VueRouter)
//Registramos el toast
Vue.use(VueToast);
//Registramos librería VueJs Pagination
Vue.component('paginate', Paginate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
