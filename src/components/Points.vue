<template>
  <div id="points" @click="!$root.$data.loading.transaction && add(500)">
    <touchable>
      <transition name="loadable-points" mode="out-in">
        <spinner class="spinner" v-if="$root.$data.loading.transaction" />
        <span v-if="!$root.$data.loading.transaction">{{$root.$data.user.points}}</span>
      </transition>
      <coin class="coin"></coin>
    </touchable>
  </div>
</template>

<script>
import Touchable from "./Touchable"
import Spinner from "./Spinner"
import Coin from "./Coin"

export default {
  name: "Points",
  components: { Touchable, Coin, Spinner },
  methods: {
    add(points) {
      this.$root.$data.loading.transaction = true
      setTimeout(() => {
        this.$root.$data.user.points += points
        this.$root.$data.loading.transaction = false
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
