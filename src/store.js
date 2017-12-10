import Vuex from "vuex"
import Vue from "vue"

import state from "./state.json"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...state,
    inited: false,
    loading: false,
    product: null,
    sort: "initial"
  },
  mutations: {
    appLoaded(state) {
      state.inited = true
    },
    startTransaction(state) {
      state.loading = true
    },
    stopTransaction(state) {
      state.loading = false
    },
    addPoints(state, points) {
      state.user.points += points
    },
    substractPoints(state, points) {
      state.user.points -= points
    },
    setSort(state, sort) {
      state.sort = sort
    },
    setProduct(state, product) {
      state.product = product
    },
    unsetProduct(state) {
      state.product = null
    }
  }
})

export default store
