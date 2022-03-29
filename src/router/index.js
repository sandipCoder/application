import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'



//user guest
function guest(to, from, next) {
  if (localStorage.Activeusers) {
    next('/')
  } else {
    next()
  }
}
//user gaurds
function gaurds(to, from, next) {
  if (localStorage.Activeusers) {
    next()
  } else {
    next('/login')
   
  }
}

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: guest
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter: guest
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    beforeEnter: gaurds
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      beforeEnter: guest
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});


export default router;
