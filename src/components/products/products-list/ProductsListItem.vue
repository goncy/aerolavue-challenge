<template>
  <div id="products-list-item" :class="{selected, affordable}">
    <overlay :balance="balance" :cost="product.cost" :class="{selected, affordable}"></overlay>
    <div class="content">
      <touchable :type="affordable ? 'primary-inverted' : 'default'" :class="['price', {affordable}]">
        <span>{{product.cost}}</span>
        <coin v-if="affordable" class="coin" width="20" height="20"></coin>
      </touchable>
      <img class="image" :src="product.img.url" @error="imageFailed" :alt="product.name">
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

import Overlay from "./ProductsListItemOverlay"

export default {
  components: { Coin, Touchable, Overlay },
  props: {
    product: Object,
    selected: Boolean,
    balance: Number,
    close: Function
  },
  computed: {
    affordable() {
      return this.balance - this.product.cost >= 0
    }
  },
  methods: {
    imageFailed(event) {
      event.target.src =
        "http://via.placeholder.com/252x182/ffffff?text=NO%20IMAGE"
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
    .price {
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
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
