<template>
  <div id="history">
    <div class="empty" v-if="!user.redeemHistory.length">
      You don't have a redeem history
    </div>
    <transition-group v-else name="list" class="grid">
      <div class="item" v-for="item in user.redeemHistory" :key="item._id">
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
          <coin class="coin" width="23px" height="23px" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from "vuex"

import FallbackImage from "./FallbackImage"
import Coin from "./Coin"

export default {
  components: { FallbackImage, Coin },
  computed: mapState(["user"])
}
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/mixins.scss";

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

    .item {
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
          margin-bottom: -6px;
        }
      }
    }
  }
}
</style>
