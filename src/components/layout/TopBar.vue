<template>
  <div>
    <div id="top-bar">
      <kite animation="hover" width="40" height="40"></kite>
      <div class="information">
        <span>{{name}}</span>
        <points class="points" />
      </div>
    </div>
  </div>
</template>

<script>
import Kite from "../Kite"
import Points from "../Points"

export default {
  name: "TopBar",
  components: { Kite, Points },
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";

#top-bar {
  height: 80px;
  background-color: $white;
  font-size: 24px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .information {
    display: flex;
    align-items: center;

    .points {
      margin-left: 10px;
    }
  }
}
</style>
