import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculation from '../views/Calculation.vue'
import CalculationPreview from '../views/CalculationPreview.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Calculation',
        component: Calculation
    },
    {
        path: '/history',
        name: 'history',
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/History.vue')
        }
    },
    {
        path: '/calculation/:id',
        name: 'calculation',
        props: true,
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/CalculationPreview.vue')
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router