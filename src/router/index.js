import Vue from 'vue'
import VueRouter from 'vue-router'
import AblumsManager from '../views/AblumsManager.vue'
import APItest from '../views/APItest.vue'
import Mocha from '../views/Mocha.vue'
import Sprider from '../views/Sprider.vue'
import SaveDB from '../views/SaveDB.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'ablumsManager',
        component: AblumsManager
    },
    {
        path: '/sprider',
        name: 'sprider',
        component: Sprider
    },
    {
        path: '/savedb',
        name: 'savedb',
        component: SaveDB
    },
    {
        path: '/mocha',
        name: 'mocha',
        component: Mocha
    },
    {
        path: '/api',
        name: 'api',
        component: APItest
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router