import Vue from "vue"

import App from "./App"
import store from "./store"

import "./filters"

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App }
})
