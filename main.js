import './style.css'
import Vue from "vue";
import App from "./src/App.vue";
import VueRouter from 'vue-router'

//Registramos el router
Vue.use(router)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
