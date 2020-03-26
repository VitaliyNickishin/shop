import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
		products: []
 },
 
 actions: {
  GET_PRODUCTS_FROM_API({commit}) {
   //запрос данных
   return axios('http://localhost:3000/products', {
    method: "GET"
   })
   //полученные данные
   .then((products) => {
    //вызываем мутацию,чтоб изменить пустой массив 
    //products в state из выполненного запроса,
    //которые пойдут дополнительным аргументом payload(нагрузкой) 
    commit('SET_PRODUCTS_TO_STATE', products.data);
    //вернем если нужны будут какие то действия*
    return products;
   })
   //в случае ошибки запроса
   .catch(error => {
				console.log(error);
				return error;
			})
  }
 },
 //выполним мутацию
 mutations: {
  SET_PRODUCTS_TO_STATE (state, products) {
   //наполним массив новыми данными
   state.products = products;
  }
 },
 getters: {
  PRODUCTS(state) {
   return state.products 
  }
 }
})

export default store