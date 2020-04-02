<template>
 <div class="main-wrapper">
   <Header />
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
  <!-- <Catalog />
  <Cart 
   v-if="CART.length"
   :cart_data="CART"
   /> -->
 </div>
</template>

<script>
import Header from '../layouts/Header'
// import Catalog from './Catalog'
// import Cart from './Cart'
// import {mapGetters} from 'vuex'

 export default {
  name: 'main-wrapper',
  components: {
    Header
  },
  
  data() {
   return {
    
   }
  },
  // computed: {
  //  ...mapGetters([
  //   'CART'
  //  ])
  // }
 }
</script>

<style lang="scss" scoped>
//  .main-wrapper {
//   margin: auto;
//   max-width: 900px;
//  }
</style>