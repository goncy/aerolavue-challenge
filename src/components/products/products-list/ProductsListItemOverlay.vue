<template>
  <div id="overlay">
    <div @click.stop="unsetProduct()" class="close">
      <img src="../../../assets/close.svg" alt="">
    </div>
    <div class="balance">
      <div class="content">
        <span class="current">{{points}}</span>
        <span class="cost">- {{product.cost}}</span>
        <hr>
        <div class="final">
          <span>{{balance}}</span>
          <coin animated class="coin" size="25" />
        </div>
      </div>
    </div>
    <touchable
      @click.native="redeem"
      v-if="balance >= 0"
      class="redeem"
      type="primary-inverted"
    >
      <transition name="redeem-button" mode="out-in">
        <span v-if="!loading">REDEEM NOW</span>
        <spinner class="spinner" v-if="loading" />
      </transition>
    </touchable>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

import Coin from "../../../components/Coin"
import Touchable from "../../../components/Touchable"
import Spinner from "../../../components/Spinner"

export default {
  components: { Coin, Touchable, Spinner },
  props: {
    product: Object,
    points: Number,
    loading: Boolean
  },
  computed: {
    balance() {
      return this.points - this.product.cost
    }
  },
  methods: {
    ...mapMutations(["unsetProduct"]),
    redeem() {
      if (this.loading) return

      this.$store.commit("startTransaction")
      setTimeout(() => {
        this.$store.commit("substractPoints", this.product.cost)
        this.$store.commit("addToHistory", this.product)
        this.$store.commit("stopTransaction")
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/theme.scss";

#overlay {
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .25s;
  opacity: 0;
  pointer-events: none;
  perspective: 500px;
  background-color: rgba($grey-600, 0.9);
  &.affordable {
    background-color: rgba($primary, 0.9);
  }
  &.selected {
    opacity: 1;
    pointer-events: all;
  }
  .close {
    transition: all 0.25s;
    position: absolute;
    right: 15px;
    top: 13.5px;
    width: 15px;
    height: 15px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  .redeem {
    font-weight: 600;
    font-size: 20px;
    transition: all .25s;
    .spinner {
      padding: 7.5px 40px;
    }
    // Load animations
    .redeem-button-enter-active,
    .redeem-button-leave-active {
      transition: opacity .5s
    }

    .redeem-button-enter,
    .redeem-button-leave-to {
      opacity: 0
    }
  }
  .balance {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    .content {
      font-weight: 600;
      font-size: 24px;
      color: $white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      hr {
        width: 100%;
        margin: 5px 0;
        border-top: 1px solid $white;
      }
      .final {
        display: flex;
        align-items: center;
        .coin {
          margin-left: 2.5px;
        }
      }
    }
  }
}
</style>
