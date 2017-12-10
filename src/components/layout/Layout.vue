<template>
  <div id="layout" class="elevation-1">
    <top-bar :name="user.name"></top-bar>
    <slot></slot>
  </div>
</template>

<script>
import TopBar from "./TopBar"

export default {
  name: "Layout",
  components: { TopBar },
  data() {
    return {
      user: this.$root.$data.user
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../styles/theme.scss";

#layout {
  background-color: $white;
  max-width: 1600px;
  width: 100%;
}
</style>
