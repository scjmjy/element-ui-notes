import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/layout/index.vue'
import Container from '../components/container/index.vue'
import Icon from '../components/icon/index.vue'
import Button from '../components/button/index.vue'
import Link from '../components/link/index.vue'
import Radio from '../components/radio/index.vue'
import Checkbox from '../components/checkbox/index.vue'
import Input from '../components/input/index.vue'
import InputNumber from '../components/input_number/index.vue'
import Select from '../components/select/index.vue'
import Cascader from '../components/cascader/index.vue'
import Swtich from '../components/switch/index.vue'
import Slider from '../components/slider/index.vue'
import Time from '../components/time/index.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/layout', name: 'Layout', component: Layout },
    { path: '/container', name: 'Container', component: Container },
    { path: '/icon', name: 'Icon', component: Icon },
    { path: '/button', name: 'Button', component: Button },
    { path: '/link', name: 'Link', component: Link },
    { path: '/radio', name: 'Radio', component: Radio },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox },
    { path: '/input', name: 'Input', component: Input },
    { path: '/input_number', name: 'InputNumber', component: InputNumber },
    { path: '/select', name: 'Select', component: Select },
    { path: '/cascader', name: 'Cascader', component: Cascader },
    { path: '/swtich', name: 'Swtich', component: Swtich },
    { path: '/slider', name: 'Slider', component: Slider },
    { path: '/time', name: 'Time', component: Time }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
