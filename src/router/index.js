import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DestinationDetails from '../components/DestinationDetails.vue'

const routes = [
    // {
    //     path : '/about',
    //     name : 'AboutView',
    //     component : AboutPageView
    // },
    {
        path : '/',
        name : 'HelloWorld',
        component : HelloWorld
    },
    {
        path : '/destination',
        name: 'Destination',
        component : DestinationDetails
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router