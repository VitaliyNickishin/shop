<template>
 <div class="catalog">
  <h1>Catalog</h1>
  <div class="catalog__list">
   <Card 
    v-for="product in products"
    :key="product.article"
    :product_data="product"
    @sendArticleToParent="reciveArticle"
   />
   
  </div>
 </div>
</template>

<script>
import Card from './Card'
// import data from '../api/db.json'

 export default {
  name: 'Catalog',
  components: {
   Card
  },
  data() {
   return {
    products: [
     {
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100,
      article: "T1",
      available: true,
      category: "Мужские"
     },
     {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3500,
      article: "T2",
      available: true,
      category: "Женские"
     },
     {
      image: "3.jpg",
      name: "T-shirt 3",
      price: 2600,
      article: "T3",
      available: true,
      category: "Мужские"
     },
     {
      image: "4.jpg",
      name: "T-shirt 4",
      price: 3500,
      article: "T4",
      available: true,
      category: "Женские"
     },
     {
      image: "5.jpg",
      name: "T-shirt 5",
      price: 2750,
      article: "T5",
      available: true,
      category: "Мужские"
     },
     {
      image: "6.jpg",
      name: "T-shirt 6",
      price: 3200,
      article: "T6",
      available: true,
      category: "Женские"
     },
    ]
   }
  },
  methods: {
   reciveArticle(hello) {
    console.log(hello);
    
   }
  }
  
 }
</script>

<style lang="scss" scoped>
 .catalog {
  &__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
  }
 }
</style>