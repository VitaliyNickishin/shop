<template>
 <div class="main-wrapper">
  <Catalog />
  <Cart 
   v-if="CART.length"
   :cart_data="CART"
   />
 </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'
import {mapGetters} from 'vuex'

 export default {
  name: 'main-wrapper',
  components: {
   Catalog,
   Cart
  },
  
  data() {
   return {
    title: 'hello main-wrapper'
   }
  },
  computed: {
   ...mapGetters([
    'CART'
   ])
  }
 }
</script>

<style lang="scss" scoped>
 .main-wrapper {
  margin: auto;
  max-width: 900px;
 }
</style>