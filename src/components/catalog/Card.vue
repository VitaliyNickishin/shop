<template>
 <div class="card">

   <Popup 
    v-if="isInfoPopupVisible"
    rightBtnTitle="Add to cart"
    :popupTitle="product_data.name"
    @closePopup="closeInfoPopup"
    @rightBtnAction="addToCart"
   >
    <img 
      :src="require('../../assets/images/'+ product_data.image)" 
      alt="img"
      class="card__img"
    />
   <div>
    <p class="card__name">{{product_data.name}}</p>
    <p class="card__price">Price: {{product_data.price | toFix | formattedPrice}}</p>
    <p class="card__price">{{product_data.category}}</p>
   </div>
   </Popup>

  <img 
   :src="require('../../assets/images/'+ product_data.image)" 
   alt="img"
   class="card__img"
   />
  <p class="card__name">{{product_data.name}}</p>
  <p class="card__price">Price: {{product_data.price | toFix | formattedPrice}}</p>
  <button
    class="card__show-info"
    @click='showPopupInfo'
  >
    Show info
  </button>
  <button 
   class="card__btn btn" 
   @click="addToCart"
  >
   Add to cart
  </button>
 </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'
import Popup from '../popup/Popup'

 export default {
  name: 'Card',
  components: {
    Popup
  },

  filters: {
    toFix,
    formattedPrice
  },

  props: {
   product_data: {
    type: Object,
    default() {
     return {}
    }
   }
  },
  data() {
    return {
      isInfoPopupVisible: false
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

   //открытие модал.окна с информацией
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
   //закрытие модал.окна 
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },

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