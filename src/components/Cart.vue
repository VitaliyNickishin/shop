<template>
 <div class="cart">
  Hello Cart
  <cart-item 
   v-for="item in cart_data"
   :key="item.article"
   :cart_item_data="item"
  />
 </div>
</template>

<script>
import CartItem from './CartItem'

 export default {
  name: 'Cart',
  components: {
   CartItem
  },
  props: {
   cart_data: {
    type: Array,
    default() {
     return []
    }
   }
  },
 }
</script>

<style lang="scss" scoped>

</style>