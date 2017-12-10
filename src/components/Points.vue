<template>
  <div id="points" @click="!loading && add(500)">
    <touchable>
      <transition name="loadable-points" mode="out-in">
        <spinner class="spinner" v-if="loading" />
        <span v-if="!loading">{{points}}</span>
      </transition>
      <coin class="coin"></coin>
    </touchable>
  </div>
</template>

<script>
import { mapState } from "vuex"

import Touchable from "./Touchable"
import Spinner from "./Spinner"
import Coin from "./Coin"

export default {
  name: "Points",
  components: { Touchable, Coin, Spinner },
  computed: mapState({
    loading: state => state.loading,
    points: state => state.user.points
  }),
  methods: {
    add(points) {
      this.$store.commit("startTransaction")
      setTimeout(() => {
        this.$store.commit("addPoints", points)
        this.$store.commit("stopTransaction")
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/animations.scss";

#points {
  display: flex;
  align-items: center;

  .coin {
    margin-left: 5px;
  }

  .spinner {
    margin-top: 2px;
  }

  // Load animations
  .loadable-points-enter-active,
  .loadable-points-leave-active {
    transition: opacity .5s
  }

  .loadable-points-enter,
  .loadable-points-leave-to {
    opacity: 0
  }
}
</style>
