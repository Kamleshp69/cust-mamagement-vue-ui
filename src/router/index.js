import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import CustomersList from "../components/CustomersList.vue";
import UpdateCustomer from "../components/UpdateCustomer.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/customers",
    name: "CustomersList",
    component: CustomersList
  },
  {
    path: "/addcustomer",
    name: "UpdateCustomer",
    component: UpdateCustomer
  }
];

const router = new VueRouter({
  routes
});

export default router;
