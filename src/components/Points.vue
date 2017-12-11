<template>
  <div id="points" @click="!loading && addPoints(1000)">
    <touchable>
      <div class="points">
        <transition name="loadable-points" mode="out-in">
          <spinner v-if="loading" class="spinner" />
          <span v-else>{{points}}</span>
        </transition>
      </div>
      <coin animated />
    </touchable>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

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
  methods: mapActions(["addPoints"])
}
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/animations.scss";

#points {
  display: flex;
  align-items: center;

  .points {
    margin-right: 5px;
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
