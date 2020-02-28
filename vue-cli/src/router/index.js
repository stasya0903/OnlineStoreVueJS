import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import( '../views/checkout.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import( '../views/catalog.vue'),
  },
  {
    path: '/singleProductPage/:id',
    name: 'singleProductPage',
    component: () => import( '../views/singleProductPage.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
