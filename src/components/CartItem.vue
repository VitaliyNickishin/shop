<template>
 <div class="cart-item">
  <img 
   :src="require('../assets/images/'+ cart_item_data.image)"  
   alt="img"
  >
  <div class="cart-item__info">
   <p>{{cart_item_data.name}}</p>
   <p>{{cart_item_data.price}}</p>
   <p>{{cart_item_data.article}}</p>
  </div>
  <div class="cart-item__quantity"></div>
  <button>Delete</button>
 </div>
</template>

<script>
 export default {
  name: 'CartItem',
  props: {
   cart_item_data: {
    type: Object,
    default() {
     return {}
    }
   }
  }
 }
</script>

<style lang="scss" scoped>
 .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
</style>