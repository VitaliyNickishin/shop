<template>
 <div class="header">
  <router-link :to="{name: 'Home'}">
   <img src="../assets/logo.png" alt="logo">
  </router-link>
  <div class="search">
   <input 
   type="text"
   v-model="searchVal"
   >
   <button class="search__btn">
    <i 
     class="material-icons"
     @click="search(searchVal)"
    >
    search
    </i>
   </button> 

   <button class="search__btn clear-btn">
    <i 
     class="material-icons"
     @click="clearSearchField()"
    >
    clear
    </i>
   </button> 
   
  </div><!-- .search -->
  
 </div><!-- .header -->
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

 export default {
  name: 'Header',
  props: {},
  data() {
   return {
    searchVal: ''
   }
  },
  computed: {
   ...mapGetters([
    'SEARCH_VALUE'
   ])
  },
  methods: {
   ...mapActions([
    'GET_SEARCH_VALUE_TO_VUEX'
   ]),
   //для отправки значения и переход в каталог
   search(value) {
    this.GET_SEARCH_VALUE_TO_VUEX(value);
    // если мы находимся не в каталоге
    if (this.$router.path !== '/catalog') {
     // выполняем переход
     this.$router.push('/catalog')
    }
   },
   //очистка поля
   clearSearchField() {
    this.searchVal = ''
    this.GET_SEARCH_VALUE_TO_VUEX();
    if (this.$router.path !== '/catalog') {
     this.$router.push('/catalog')
    }
   }
  }
 }
</script>

<style lang="scss" scoped>
 .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $green-bg;
  padding: $padding*2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  img {
   width: 50px;
  }
 }
 .search {
  position: relative;
  padding: $padding*2;
  display: flex;
  align-items: center;
  // color: #fff;
  // background-color: #e7e7e7;
  &__btn {
   cursor: pointer;
   background-color: transparent;
   border: none;
  }
 }
 .clear-btn {
  position: absolute;
  top: 17px;
  right: 44px;
 }
</style>