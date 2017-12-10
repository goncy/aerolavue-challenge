<template>
  <div id="app">
    <loader v-if="loading"></loader>
    <layout v-if="!loading">
      <router-view/>
    </layout>
  </div>
</template>

<script>
// import api from "./services/api"

import Loader from "./components/layout/Loader"
import Layout from "./components/layout/Layout"

export default {
  name: "App",
  components: { Loader, Layout },

  data() {
    return {
      loading: false,
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
    }, 0) // -> DAFAQ IS THIS? - Esto es un demo y queria presumir mi bello loader, ADMIRALO
  }
}
</script>

<style lang="scss">
@import "./styles/theme.scss";
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
  }
}

@media #{$small} {
  body {
    padding: 0px !important;
  }
}
</style>
