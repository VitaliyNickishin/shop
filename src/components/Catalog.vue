<template>
 <div class="catalog">
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
   <div class="catalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
  <h1>Catalog</h1>
  <div class="catalog__list">
   <Card 
    v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product"
    @addToCart="addedToCart"
   />
   
  </div>
 </div>
</template>

<script>
import Card from './Card'
import {mapActions, mapGetters} from 'vuex'

 export default {
  name: 'Catalog',
  components: {
   Card
  },
  
  data() {
   return {
    // products: [
    //  {
    //   image: "1.jpg",
    //   name: "T-shirt 1",
    //   price: 2100,
    //   article: "T1",
    //   available: true,
    //   category: "Мужские"
    //  },
    //  {
    //   image: "2.jpg",
    //   name: "T-shirt 2",
    //   price: 3500,
    //   article: "T2",
    //   available: true,
    //   category: "Женские"
    //  },
    //  {
    //   image: "3.jpg",
    //   name: "T-shirt 3",
    //   price: 2600,
    //   article: "T3",
    //   available: true,
    //   category: "Мужские"
    //  },
    //  {
    //   image: "4.jpg",
    //   name: "T-shirt 4",
    //   price: 3500,
    //   article: "T4",
    //   available: true,
    //   category: "Женские"
    //  },
    //  {
    //   image: "5.jpg",
    //   name: "T-shirt 5",
    //   price: 2750,
    //   article: "T5",
    //   available: true,
    //   category: "Мужские"
    //  },
    //  {
    //   image: "6.jpg",
    //   name: "T-shirt 6",
    //   price: 3200,
    //   article: "T6",
    //   available: true,
    //   category: "Женские"
    //  },
    // ]
   }
  },
  computed: {
   ...mapGetters([
    'PRODUCTS',
    'CART'
   ])
  },
  methods: {
   ...mapActions([
    //для возможности обратиться через this
    'GET_PRODUCTS_FROM_API',
    'ADD_TO_CART'
   ]),

   addedToCart(hello) {
    console.log(hello);
    this.ADD_TO_CART(hello)
   }
  },
  mounted() {
   this.GET_PRODUCTS_FROM_API()
   //*
   .then((response) => {
    if (response.data) {
     console.log('Data arrived!');
    }
   })
  }
 }
</script>

<style lang="scss">
 .catalog {
  &__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
  }
  &__link_to_cart {
   position: absolute;
   top: 10px;
   right: 10px;
   padding: $padding*2;
   border: 1px solid #aeaeae;
  }
 }
</style>