<template>
  <div id="top-bar">
    <div class="bar">
      <kite animation="hover" size="40" />
      <div class="information">
        <span class="name">{{user.name}}</span>
        <history-icon
          class="history-button"
          @click.native="toggleHistory"
          :class="{'active': showHistory}"
        />
        <points />
      </div>
    </div>
    <div :class="['history', {'active': showHistory}]">
      <history-list />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import Kite from "./Kite"
import Points from "./Points"
import HistoryList from "./history-list/HistoryList"
import HistoryIcon from "./HistoryIcon"

export default {
  name: "TopBar",
  components: { Kite, Points, HistoryList, HistoryIcon },
  props: {
    name: String
  },
  data() {
    return {
      showHistory: false
    }
  },
  computed: mapState(["user"]),
  methods: {
    toggleHistory() {
      this.showHistory = !this.showHistory
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/mixins.scss";

#top-bar {
  .history {
    position: relative;
    transition: all .5s;
    padding: 0;
    height: 0;
    overflow: scroll;
    background-color: $grey-100;

    &.active {
      height: 200px;
    }
  }

  .bar {
    @include elevation-2;
    height: 80px;
    background-color: $white;
    font-size: 24px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $primary;

    .information {
      display: flex;
      align-items: center;

      .history-button {
        transition: all 0.5s;
        padding: 6px;
        margin: 0 5px;
        border-radius: 100%;
        background-color: white;

        &.active {
          background-color: rgba($primary, 0.15);
        }
      }
    }
  }
}
</style>
