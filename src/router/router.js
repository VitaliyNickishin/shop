import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/catalog/Catalog'
import Cart from '../components/cart/Cart'
import Home from '../views/Home'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: vProductPage
    // },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true
    }
  ]
})

export default router;