<template>
  <transition appear name="loader-animation" mode="out-in">
    <div id="loader">
      <transition appear name="kite-animation">
        <kite animation="infinite"></kite>
      </transition>
    </div>
  </transition>
</template>

<script>
import Kite from "../Kite"

export default {
  name: "Loader",
  components: { Kite }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";

#loader {
  z-index: 2; // 1 is the products header text to override the overlay
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $grey-400;
  display: flex;
  justify-content: center;
  align-items: center;
}

// Kite animation
.kite-animation-enter-active {
  transition: opacity 3.5s ease-in-out, transform 2s ease-out;
}

.kite-animation-enter {
  opacity: 0;
  transform: translateY(50px);
}

// Loader animation
.loader-animation-enter-active, .loader-animation-leave-active {
  transition: all 1s ease-in-out;
}

.loader-animation-leave-to {
  opacity: 0;
}
</style>
