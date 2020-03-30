export default {
 SET_PRODUCTS_TO_STATE (state, products) {
  //наполним массив новыми данными
  state.products = products;
 },
  // изменение количества товара в корзине
 SET_CART(state, prod) {
   if (state.cart.length) {
     let isProductExists = false;
     state.cart.map(function(item) {
       if (item.article === prod.article) {
         isProductExists = true;
         item.quantity++
       }
     })
     // добавление товара в корзину
     if (!isProductExists) {
       state.cart.push(prod)
     }
   } else {
     state.cart.push(prod)
   }
 },
 // удаление товара из корзины
 REMOVE_FROM_CART(state, index) {
   // вырезать из массива индекс в количестве 1
   state.cart.splice(index, 1)
 },
 // увелечние количества товара
 INCREMENT(state, index) {
   state.cart[index].quantity ++
 },
 // уменьшение количества товара
 DECREMENT(state, index) {
   if(state.cart[index].quantity > 1) {
     state.cart[index].quantity --
   }
 }
}