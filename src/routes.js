import VueRouter from 'vue-router';
import EmployeeList from './components/EmployeeList.vue'

const routes = [{ path: '/', component: EmployeeList  }]



export const router = new VueRouter({
    routes
    
});