<template>
 <div class="cart">
  <h1>Cart</h1>
  <cart-item 
   v-for="(item, index) in cart_data"
   :key="item.article"
   :cart_item_data="item"
   @deleteFromCart="deleteFromCart(index)"
  />
 </div>
</template>

<script>
import CartItem from './CartItem'
import {mapActions} from 'vuex'

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

  methods: {
   ...mapActions([
    //для возможности обратиться через this
    'DELETE_FROM_CART'
   ]),
   deleteFromCart(index) {
    // console.log(index);
    this.DELETE_FROM_CART(index)
   }
  }
 }
</script>

<style lang="scss" scoped>

</style>