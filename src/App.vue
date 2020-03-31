<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- примим $emit(event: 'select-up', option) прописав в методе optionSelect-->
    <!-- <v-select 
      :outOptions="options"
      @select-up="optionSelect"
      :outSelected="selected"
    />
    <p>Selected option goes here: {{selected}}</p> -->
    <main-wrapper />
  </div>
</template>

<script>
import MainWrapper from './components/MainWrapper'

export default {
  name: 'App',

  components: {
    MainWrapper
  },

  data() {
    return {
      
    }
  },

  methods: {
    // optionSelect(option) {
    //   this.selected = option.name
    // }
  }
}
</script>

<style>

</style>
