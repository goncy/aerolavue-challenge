import Vue from "vue"
import Vuex from "vuex"

import App from "./App"
import router from "./router"

import store from "./store"

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
window.app = new Vue({
  el: "#app",
  router,
  data: store,
  template: "<App/>",
  components: { App }
})
