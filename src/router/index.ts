import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Layout from '../components/layout/index.vue'
import Container from '../components/container/index.vue'
import Icon from '../components/icon/index.vue'
import Button from '../components/button/index.vue'
import Link from '../components/link/index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout
  },
  {
    path: "/container",
    name: "Container",
    component: Container
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/link",
    name: "Link",
    component: Link
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
