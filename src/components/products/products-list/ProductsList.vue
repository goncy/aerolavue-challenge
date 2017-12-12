<template>
  <transition-group id="products-list">
    <products-list-item
      v-for="item in sortedProducts(products)"
      @click.native="setProduct(item._id)"
      :key="item._id"
      :selected="item._id === product"
      :product="item"
      :points="user.points"
      :loading="loading"
    />
  </transition-group>
</template>

<script>
import { mapState, mapMutations } from "vuex"

import ProductsListItem from "./ProductsListItem"

export default {
  name: "ProductsList",
  components: { ProductsListItem },
  computed: mapState(["sort", "product", "products", "user", "loading"]),
  methods: {
    ...mapMutations(["setProduct"]),
    sortedProducts(products) {
      switch (this.sort) {
        case "lowest_price": {
          return products.concat().sort((a, b) => a.cost - b.cost)
        }
        case "highest_price": {
          return products.concat().sort((a, b) => b.cost - a.cost)
        }
        default:
          return products
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  transition: all 1s;
}
</style>
