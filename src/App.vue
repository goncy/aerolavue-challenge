<template>
  <div id="app">
    <loader v-if="loading"></loader>
    <div class="layout" v-else>
      <top-bar></top-bar>
      <products></products>
    </div>
  </div>
</template>

<script>
// import api from "./services/api"

import Loader from "./components/layout/Loader"
import TopBar from "./components/layout/TopBar"
import Products from "./components/products/Products"

export default {
  name: "App",
  components: { Loader, Products, TopBar },

  data() {
    return {
      loading: true,
      error: null
    }
  },

  async mounted() {
    try {
      // this.user = await api.user.me()
    } catch (err) {
      this.error = err
    }

    setTimeout(() => {
      this.loading = false
    }, 5000) // -> DAFAQ IS THIS? - Esto es un demo y queria presumir mi bello loader, ADMIRALO
  }
}
</script>

<style lang="scss">
@import "./styles/theme.scss";
@import "./styles/mixins.scss";
@import "./styles/globals.scss";
@import "./styles/responsive.scss";

body {
  margin: 0;
  padding: 25px;
  letter-spacing: -0.15px;
  background-color: $grey-400;
  font-family: 'Source Sans Pro', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  #app {
    display: flex;
    justify-content: center;

    .layout {
      @include elevation-1;
      background-color: $white;
      max-width: 1600px;
      width: 100%;
    }
  }
}

@media #{$small} {
  body {
    padding: 0px !important;
  }
}
</style>
