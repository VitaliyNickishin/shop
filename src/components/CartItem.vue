<template>
 <div class="cart-item">
  <img 
    class="cart-item__image"
    :src="require('../assets/images/'+ cart_item_data.image)"  
    alt="img"
  >
  <div class="cart-item__info">
   <p>{{cart_item_data.name}}</p>
   <p>{{cart_item_data.price}}</p>
   <p>{{cart_item_data.article}}</p>
  </div>
  <div class="cart-item__quantity">
    <p>Qty:</p>
    {{cart_item_data.quantity}}
  </div>
  <button @click="deleteFromCart">Delete</button>
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
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  methods: {
    deleteFromCart() {
      //передаем что произошел клик по кнопке
      this.$emit('deleteFromCart')
    }
  }
 }
</script>

<style lang="scss" scoped>
 .cart-item {
  padding: $padding*2;
  margin-bottom: $margin*2;
  box-shadow: 0 0 8px 0 #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  &__image {
    width: 100px;
  }

}
</style>