<template>
 <div class="catalog">
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
   <div class="catalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
  <h1>Catalog</h1>
  <div class="filters">
   <v-select />
  
   <div class="range-slider">
    <input 
     type="range" 
     min="0" 
     max="10000"
     step="10"
     v-model.number="minPrice"
     @change="setRangeSlider"
    >
    <input 
     type="range" 
     min="0" 
     max="10000"
     step="10"
     v-model.number="maxPrice"
     @change="setRangeSlider"
    >
   </div> <!-- .range-slider -->

   <div class="range-values">
    <p>Min: {{minPrice}}</p>
    <p>Max: {{maxPrice}}</p>
   </div><!-- /.range-values -->
    
  </div> <!-- .filters -->
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
import Card from '../catalog/Card'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '../v-select'

 export default {
  name: 'Catalog',
  components: {
   Card,
   vSelect
  },
  
  data() {
   return {
    sortedProducts: [],
    minPrice: 0,
    maxPrice: 10000
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
   },
   // ползунки меняются местам если пересекаются
   setRangeSlider() {
    if (this.minPrice > this.maxPrice) {
     let tmp = this.maxPrice;
     this.maxPrice = this.minPrice;
     this.minPrice = tmp;
    }
    //сортировка при перемещении ползунка
    this.sortByCategories()
   },
   //сортировка по цене
   sortByCategories() {
    let vm = this;
    //clone PRODUCTS from getters to sortedProducts
    this.sortedProducts = [...this.PRODUCTS]
    this.sortedProducts = this.sortedProducts.filter(item => {
     return item.price >= vm.minPrice && item.price <= vm.maxPrice
    })
   }

  },
  
  mounted() {
   // this.$store.dispatch('GET_PRODUCTS_FROM_API')
   this.GET_PRODUCTS_FROM_API()
   //*
   .then((response) => {
    if (response.data) {
     console.log('Data arrived!');
     this.sortByCategories()
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
 .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>