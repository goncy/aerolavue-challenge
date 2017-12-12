<template>
  <div id="coin" :style="{width: size + 'px', height: size + 'px'}">
    <img
      v-once
      :class="{animated}"
      class="image"
      :width="size"
      :height="size"
      src="../assets/coin.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    size: {
      type: String,
      default: "35"
    },
    animated: Boolean
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
  &.animated {
    animation: flip 15s infinite;
    animation-delay: 5s;
  }
}
</style>
