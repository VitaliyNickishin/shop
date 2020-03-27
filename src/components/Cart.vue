<template>
 <div class="cart">

  <router-link :to="{name: 'catalog'}">
   <div class="catalog__link_to_cart">Back to Catalog</div>
  </router-link>

  <h1>Cart</h1>

  <!-- <p v-if="cart_data.length === 0 ">There are no products...</p> -->
  <p v-if="!cart_data.length">There are no products...</p>

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