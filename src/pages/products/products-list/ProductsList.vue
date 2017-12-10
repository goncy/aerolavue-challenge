<template>
  <transition-group id="products-list">
    <products-list-item
      v-for="product in sortedProducts(products)"
      @click.native="setProduct(product._id)"
      :selected="product._id === selectedProduct"
      :key="product._id"
      :product="product"
      :balance="balance"
    />
  </transition-group>
</template>

<script>
import ProductsListItem from "./ProductsListItem"

export default {
  components: { ProductsListItem },
  props: {
    balance: Number,
    products: Array,
    selectedProduct: String,
    selectedSort: String
  },
  methods: {
    setProduct(product) {
      this.$emit("setProduct", product)
    },
    sortedProducts(products) {
      switch (this.selectedSort) {
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
