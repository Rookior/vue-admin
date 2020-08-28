import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.num;
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit({
          type: 'increment',
          num: 10
        })
      }, 1000)
    }
  },
  modules: {
    menu: menu,
  }
})