<template>
<div class="popup-wrapper" ref="popup-wrapper">
 <div class="popup">
  <div class="popup__header">
   <span>{{popupTitle}}</span>
   <span>
    <i 
     class="material-icons"
     @click="closePopup"
    >
    close
    </i>
    </span>
  </div>

  <div class="popup__content">
   <slot></slot>
  </div>

  <div class="popup__footer">
   <button class="close-modal" @click="closePopup">Close</button>
   <button class="submit-btn" @click="rightBtnAction">{{rightBtnTitle}}</button>
  </div>

 </div> <!-- .popup -->
</div> <!-- .popup-wrapper -->
</template>

<script>
 export default {
  name: 'Popup',
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
    rightBtnTitle: {
      type: String,
      default: 'Ok'
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    rightBtnAction() {
      this.$emit('rightBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    document.addEventListener('click', item => {
      if (item.target === this.$refs['popup-wrapper']) {
        // console.log(123);
        this.closePopup();
      }
    })
  }
  
 }
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(64,64,64, .4);
}
 .popup {
  padding: $padding*2;
  position: fixed;
  top: 50px;
  width: 400px;
  background-color: #fff;
  box-shadow: 0 0 17px 0 #7e7e7e;
  z-index: 10;
  &__header, &__footer {
   display: flex;
   align-items: center;
   justify-content: space-between;
  }
  &__content {
   display: flex;
   align-items: center;
   justify-content: space-between;
  }
  i {
    cursor: pointer;
  } 
 }
 .submit-btn {
  padding: $padding;
  color: #fff;
  background-color: #26ae68;
 }
 .close-modal {
  padding: $padding;
  color: #fff;
  background-color: red;
 }
</style>