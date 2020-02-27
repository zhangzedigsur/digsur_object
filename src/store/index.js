import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  router_param:'1-1',
}

const mutations = {
  router_param (state, str) {
    state.router_param = str
  }
}


export default new Vuex.Store({
  state,
  mutations,
})
