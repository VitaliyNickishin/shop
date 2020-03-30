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
   @increment="increment(index)"
   @decrement="decrement(index)"
  />
  <div class="cart__total">
   <p>Total:</p>
   <p>{{cartTotalCost}} грн</p>
  </div>
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

  computed: {
   cartTotalCost() {
    // let result = []
    // // прверять на наличие корзины
    // if (this.cart_data.length) {
    //  for (let item of this.cart_data) {
    //  result.push(item.price * item.quantity)
    // }
    //  result = result.reduce(function(sum, el) {
    //   return sum + el;
    //  })
    //  return result;
    //  // иначе возвращать 0
    // } else {
    //  return 0
    // }

    //second way
    return this.cart_data.reduce((res,item) => res + item.price*item.quantity, 0)
   }
  },

  methods: {
   ...mapActions([
    //для возможности обратиться через this
    'DELETE_FROM_CART',
    'INCREMENT_CART_ITEM',
    'DECREMENT_CART_ITEM'
   ]),
   // удаление из корзины
   deleteFromCart(index) {
    this.DELETE_FROM_CART(index)
   },
   // увеличение количества товара
   increment(index) {
    this.INCREMENT_CART_ITEM(index)
   },
   // уменьшение количества товара
   decrement(index) {
    this.DECREMENT_CART_ITEM(index)
   }
  }
 }
</script>

<style lang="scss">
 .cart {
  &__total {
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
   padding: $padding*2 $padding*3;
   display: flex;
   justify-content: center;
   background: $green-bg;
   color: #ffffff;
   font-size: 20px;
   p:first-child {
    margin-right: $margin*2;
   }
  }
 }
</style>