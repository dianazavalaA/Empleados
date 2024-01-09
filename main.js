import './style.css'
import Vue from "vue";
import App from "./src/App.vue";
import VueRouter from 'vue-router'

new Vue({
  render: (h) => h(App),
}).$mount("#app");
