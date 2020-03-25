<template>
 <div class="main-wrapper">
  
  <Catalog />
  <Cart />
 </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'

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
  }
 }
</script>

<style lang="scss" scoped>
 .main-wrapper {
  margin: auto;
  max-width: 900px;
 }
</style>