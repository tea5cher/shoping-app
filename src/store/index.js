import { createStore } from 'vuex'
import products from './modules/products'
import brands from './modules/brands'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    brands,
    cart
  }
})
