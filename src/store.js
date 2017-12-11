import Vuex from "vuex"
import Vue from "vue"

import api from "./services/api"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    product: null,
    sort: "initial"
  },
  mutations: {
    startTransaction(state) {
      state.loading = true
    },
    stopTransaction(state) {
      state.loading = false
    },
    setPoints(state, points) {
      state.user.points = points
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
    },
    addToHistory(state, product) {
      state.user.redeemHistory.push(product)
    },
    setUser(state, user) {
      state.user = user
    },
    setHistory(state, history) {
      state.history = history
    },
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async addPoints({ commit }, points) {
      commit("startTransaction")

      try {
        const response = await api.user.points(points)
        commit("setPoints", response["New Points"])
      } catch (err) {
        console.log(err) // SWALLOW BIATCH
      }

      commit("stopTransaction")
    },
    async redeemProduct({ commit, state }, product) {
      if (state.loading) return

      commit("startTransaction")

      try {
        await api.redeem(product._id)
        commit("substractPoints", product.cost)
        commit("addToHistory", product)
      } catch (err) {
        console.log(err) // SWALLOW BIATCH
      }

      commit("stopTransaction")
    }
  }
})

export default store
