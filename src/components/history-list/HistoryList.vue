<template>
  <div id="history">
    <div class="empty" v-if="!user.redeemHistory.length">
      You don't have a redeem history
    </div>
    <transition-group v-else name="list" class="grid">
      <history-list-item
        v-for="item in user.redeemHistory"
        :key="item._id"
        :item="item"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from "vuex"

import HistoryListItem from "./HistoryListItem"

export default {
  name: "HistoryList",
  components: { HistoryListItem },
  computed: mapState(["user"])
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";
@import "../../styles/mixins.scss";

#history {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  .empty {
    text-align: center;
  }

  .grid {
    position: absolute;
    top: 0;
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
    transition: all 1s;
    padding: 10px;

    .list-enter-active, .list-leave-active {
      transition: all 1s;
    }

    .list-enter, .list-leave-to {
      opacity: 0;
    }
  }
}
</style>
