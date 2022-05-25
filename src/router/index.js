import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:'/city/:id',
    name: "City",
    component: ()=>import('../views/City.vue')
  },
  {
    path:'/mharea',
    name:'Mharea',
    component: ()=>import('../views/Mharea.vue')
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
