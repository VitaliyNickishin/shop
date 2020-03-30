import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/catalog/Catalog'
import Cart from '../components/cart/Cart'
// import vMainPage from '../components/main-page/v-main-page'
// import vProductPage from '../components/catalog/v-product-page'

Vue.use(Router);

let router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'mainPage',
    //   component: vMainPage
    // },
    {
      path: '/',
      name: 'catalog',
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