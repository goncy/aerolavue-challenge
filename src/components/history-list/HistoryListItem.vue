<template>
  <div class="history-list-item">
    <div class="left">
      <div class="media">
        <fallback-image :src="item.img.url" :alt="item.name" />
      </div>
      <div class="description">
        <div class="category">
          {{item.category}}
        </div>
        <div class="name">
          {{item.name}}
        </div>
        <div class="date">
          <span v-if="item.createDate">{{item.createDate | date}}</span>
          <span v-else>Just now</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="cost">
        {{item.cost}}
      </div>
      <coin class="coin" size="23" />
    </div>
  </div>
</template>

<script>
import FallbackImage from "../FallbackImage"
import Coin from "../Coin"

export default {
  name: "HistoryListItem",
  components: { FallbackImage, Coin },
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";
@import "../../styles/mixins.scss";

.history-list-item {
  @include elevation-1;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba($primary, 0.4);
  min-height: 60px;
  background-color: $white;

  .left {
    display: flex;
    align-items: center;

    .media {
      flex: 0.75;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 7.5px;
    }

    .description {
      display: flex;
      flex-direction: column;

      .category {
        color: $grey-600;
      }

      .name {
        font-weight: 600;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    
    .cost {
      margin-right: 2.5px;
      font-weight: 600;
    }

    .coin {
      margin-bottom: -2px;
    }
  }
}
</style>
