import {createWebHistory,createRouter} from 'vue-router';
import HomeComp from './components/Home.vue'
import AboutComp from './components/About.vue'
import LoginComp from './components/Login.vue'
import RegisterComp from './components/Register.vue'
import CartComp from './components/Cart.vue'

const routes = [
    {
        name:'HomeComp',
        path:'/',
        component:HomeComp,
        // meta:{
        //     requireAuth:true
        // }
    },
    {
        name:'AboutComp',
        path:'/about',
        component:AboutComp,
        // meta:{
        //     requireAuth:true
        // }
    },
    {
        name:'CartComp',
        path:'/cart',
        component:CartComp,
        // meta:{
        //     requireAuth:true
        // }
    },
    {
        name:'Login',
        path:'/login',
        component:LoginComp
    },
    {
        name:'Register',
        path:'/register',
        component:RegisterComp
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;