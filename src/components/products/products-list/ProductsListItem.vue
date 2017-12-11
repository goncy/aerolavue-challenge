<template>
  <div id="products-list-item" :class="{selected, affordable}">
    <overlay
      :loading="loading"
      :points="points"
      :product="product"
      :class="{selected, affordable}"
    />
    <div class="content">
      <touchable :type="affordable ? 'primary-inverted' : 'default'" :class="['cost', {affordable}]">
        <span>{{product.cost}}</span>
        <coin v-if="affordable" class="coin" width="20" height="20"></coin>
      </touchable>
      <fallback-image :src="product.img.url" :alt="product.name" />
      <hr>
      <div class="bottom">
        <span class="category">{{product.category}}</span>
        <span class="name">{{product.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Coin from "../../../components/Coin"
import Touchable from "../../../components/Touchable"
import FallbackImage from "../../../components/FallbackImage"

import Overlay from "./ProductsListItemOverlay"

export default {
  components: { Coin, Touchable, Overlay, FallbackImage },
  props: {
    product: Object,
    selected: Boolean,
    loading: Boolean,
    points: Number
  },
  computed: {
    affordable() {
      return this.points - this.product.cost >= 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/theme.scss";
@import "../../../styles/mixins.scss";

#products-list-item {
  @include elevation-2;
  position: relative;
  cursor: pointer;
  border: 1px solid $white;
  background-color: $white;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  transition: all .25s;
  &:hover {
    border: 1px solid rgba($primary, 0.5);
    transform: scale(1.025);
  }
  &.selected {
    @include elevation-3;
    transform: scale(1.1);
    border: 0;
  }
  .content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    hr {
      margin-top: 5px;
      margin-bottom: 10px;
    }
    .cost {
      font-weight: 600;
      position: absolute;
      right: 10px;
      display: flex;
      align-items: center;
      border: 1px solid rgba($grey-400, 0.2);
      &.affordable {
        border: 1px solid rgba($primary, 0.2);
        .coin {
          z-index: 1;
          perspective: 500px;
          margin-left: 2.5px;
        }
      }
    }
    .bottom {
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
}
</style>
