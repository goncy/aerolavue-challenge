import Vue from "vue"
import Vuex from "vuex"

import App from "./App"
import store from "./store"

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
window.app = new Vue({
  el: "#app",
  data: store,
  template: "<App/>",
  components: { App }
})
