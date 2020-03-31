<template>
 <div class="card">
  <img 
   :src="require('../../assets/images/'+ product_data.image)" 
   alt="img"
   class="card__img"
   />
  <p class="card__name">{{product_data.name}}</p>
  <p class="card__price">Price: {{product_data.price}} грн</p>
  <button 
   class="card__btn btn" 
   @click="addToCart"
  >
   Add to cart
  </button>
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
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1)
  },
  methods: {
   //передадим родетлю Catalog артикул нажатой карточки
   // sendArticleToParent() {
   //  this.$emit('sendArticleToParent', this.product_data.article)
   // }

   //передадим в корзину товар
   addToCart() {
    this.$emit('addToCart', this.product_data);
   }
  }
 }
</script>

<style lang="scss">

 .card {
  padding: $padding*2;
  margin-bottom: $margin*2;
  box-shadow: 0 0 8px 0 #e0e0e0;
  flex-basis: 25%;
  &__img {
   width: 100px;
  }
 }
</style>