import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'https://api.myjson.com/bins/uv4ya',
    goodsArr: null
  },
  mutations: {
    getGoods (state, date) {
      state.goodsArr = date
    }
  }
})