import './style.css'
import Vue from "vue";
import App from "./src/App.vue";
import VueRouter from 'vue-router'
import { router } from './src/routes';


//Registramos el router
Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
