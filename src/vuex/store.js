import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
  products: [],
  cart: []
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
  },
  //добавление товара в корзину
  ADD_TO_CART({commit}, prod) {
   commit('SET_CART', prod)
  },
  //удаление товара из корзины
  DELETE_FROM_CART({commit}, index) {
   commit('REMOVE_FROM_CART', index )
  }
 },
 //выполним мутацию
 mutations: {
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

  REMOVE_FROM_CART(state, index) {
    // вырезать из массива индекс в количестве 1
    state.cart.splice(index, 1)
  }
 },
 getters: {
  PRODUCTS(state) {
   return state.products;
  },
  CART(state) {
   return state.cart;
  }
 }
})

export default store