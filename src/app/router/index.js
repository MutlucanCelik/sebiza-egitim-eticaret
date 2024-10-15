import { createRouter, createWebHistory } from 'vue-router'

import FrontLayout from '@/app/views/layout/FrontLayout.vue'
import Home from '@/app/views/pages/Home.vue'

import Notfound from '@/app/views/pages/error/Notfound.vue'




const routes = [

    {
        path:'/',
        name:'FrontLayout',
        component:FrontLayout,
        children:[
            {
                path:'/',
                name:'Home',
                component:Home
            }
        ]
    },
   
    {
        path:'/:catchAll(.*)',
        name:'Notfound',
        component:Notfound
    }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router