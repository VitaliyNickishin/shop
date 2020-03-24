<template>
 <div class="v-select">
  <p 
   class="title" 
   @click="showOptions"
  >
  {{outSelected}}
  </p>

  <div class="options" v-if="areOptionsVisible">

   <!-- при клике будем передавать значение(option) из массива -->
   <span 
    v-for="option in outOptions"
    :key="option.value"
    @click="selectOptions(option)"
    >
    {{option.name}}
   </span>
  </div>

 </div>
</template>

<script>
 export default {
  name: 'v-select',
  //принимаем пропсы от родителя
  props: {
   outOptions: {
    type: Array,
    default() {
     return []
    }
   },
   outSelected: {
    type: String,
    default: ''
   }
  },

  data() {
   return {
    areOptionsVisible: false,
   }
  },

  methods: {
   showOptions() {
    this.areOptionsVisible = !this.areOptionsVisible
   },
   // будем принимать значение
   // т.к. никто не работает со значением option внутри компонента select
   // момент выбирания опций придется отлавливать в родиетеле,
   // необходимо его будет поднять в родитель через emit
   // через метод select-up передадим значение option
    selectOptions(option) {
     // console.log(option);
     this.$emit('select-up', option)
     // после выбора значения выпадающий список значений закрывается
     this.areOptionsVisible = false
    }
  }

 }
</script>

<style lang="scss" scoped>
.v-select {
 position: relative;
 width: 200px;
 .title {
  border: 1px solid #ccc;
  cursor: pointer;
 }
 span {
  display: block;
  &:hover {
   background-color: #ccc;
  }
  
 }
.options {
 border: 1px solid #ccc;
 position: absolute;
 top: 20px;
 right: 0;
 width: 100%;
}
}
</style>