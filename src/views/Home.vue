<template>
 <div class="home">
  <h1>Online shop</h1>
  <p>
   <router-link :to="{name: 'Catalog'}">
    to Catalog
   </router-link>
  </p>
 </div>
</template>

<script>
 export default {
  name: 'Home',
  props: {},
  data() {
   return {

   }
  },
  computed: {}
 }
</script>

<style lang="scss" scoped>

</style>