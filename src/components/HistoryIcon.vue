<template>
  <svg id="history-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    :width="width" :height="height" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
    <g>
      <g>
        <path style="opacity:0.9;enable-background:new;" d="M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75
          l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25
          c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255
          C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "HistoryIcon",
  props: {
    animation: String,
    width: {
      type: String,
      default: "27"
    },
    height: {
      type: String,
      default: "27"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/animations.scss";

#history-icon {
  cursor: pointer;

  path {
    fill: $primary;
  }
}
</style>

