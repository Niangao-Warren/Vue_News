import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    disc: {}
  },
  mutations: {
    SET_DISC(state, disc) {
      state.disc = disc
    }
  },
  actions: {}
})
