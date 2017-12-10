<template>
  <div id="coin" :style="{width: width + 'px', height: height + 'px'}">
    <img v-once class="image" :width="width" :height="height" src="../assets/coin.svg">
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    width: {
      type: String,
      default: "35"
    },
    height: {
      type: String,
      default: "35"
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/animations.scss";

#coin {
  margin-right: -4px; //shadow offset
  margin-bottom: -4px; // shadow offset
}

.image {
  animation: flip 15s infinite;
  animation-delay: 5s;
}
</style>
