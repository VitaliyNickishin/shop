export default {
 
 //добавление товара в корзину
 ADD_TO_CART({commit}, prod) {
  commit('SET_CART', prod)
 },
 //удаление товара из корзины
 DELETE_FROM_CART({commit}, index) {
  commit('REMOVE_FROM_CART', index )
 },
 //добавление количества товара в корзине
 INCREMENT_CART_ITEM({commit}, index) {
  commit('INCREMENT', index )
 },
 //уменьшение количества товара в корзине
 DECREMENT_CART_ITEM({commit}, index) {
  commit('DECREMENT', index)
 }
}