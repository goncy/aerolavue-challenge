<template>
  <div id="kite">
    <svg v-once :class="['image', animation]" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 42.83">
      <path id="path" class="svg-logo-path" d="M35.66,0.48c-0.26-0.46-0.85-0.61-1.3-0.35l-15.59,9c-0.35,0.2-0.54,0.61-0.46,1.02L23.6,36l-0.79,0.89 c-1.33,1.49-2.45,2.3-4.58,2.3c-2.39,0-3.52-1.26-5.29-3.49c-2.12-2.66-4.77-5.97-11.19-5.97H1.59C0.71,29.73,0,30.44,0,31.32 c0,0.88,0.71,1.59,1.59,1.59h0.16c4.9,0,6.75,2.32,8.71,4.78c1.75,2.2,3.74,4.68,7.78,4.68c3.49,0,5.4-1.62,6.96-3.37l5.73-6.46 c0,0,13.63-15.37,13.63-15.37c0.27-0.31,0.32-0.75,0.11-1.11L35.66,0.48z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Kite",
  props: {
    animation: String,
    width: {
      type: String,
      default: "50"
    },
    height: {
      type: String,
      default: "50"
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/animations.scss";

#kite {
  perspective: 500px;

  #path {
    fill: $primary;
  }
}

.image {
  margin-bottom: -7px; // Animation offset

  &.infinite {
    animation: float 3s infinite;
  }

  &.hover {
    animation: float 3s infinite;
    animation-play-state: paused;

    &:hover {
      animation-play-state: running;
    }
  }
}
</style>
