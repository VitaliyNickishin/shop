<template>
 <div class="card">
  <img src="" alt="img">
  <p class="card__name">{{product_data.name}}</p>
  <p class="card__price">Price: {{product_data.price}}</p>
  <button class="card__btn btn">Add to cart</button>
 </div>
</template>

<script>
 export default {
  name: 'Card',
  props: {
   product_data: {
    type: Object,
    default() {
     return {}
    }
   }
  }
 }
</script>

<style lang="scss">

 .card {
  // padding: $padding;
  padding: 16px;
  margin-bottom: 16px;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
 }
</style>