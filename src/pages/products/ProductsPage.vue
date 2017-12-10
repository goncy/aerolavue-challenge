<template>
  <div id="products">
    <products-header></products-header>
    <div class="presentation">
      <products-filters
        @setSort="setSort"
        :selectedSort="selectedSort"
        :count="products.length"
      />
      <hr>
      <products-list
        @setProduct="setProduct"
        :products="products"
        :selectedProduct="selectedProduct"
        :selectedSort="selectedSort"
        :balance="user.points"
      />
    </div>
  </div>
</template>

<script>
import ProductsHeader from "./ProductsHeader"
import ProductsFilters from "./ProductsFilters"
import ProductsList from "./products-list/ProductsList"

export default {
  components: { ProductsHeader, ProductsFilters, ProductsList },
  data() {
    return {
      user: this.$root.$data.user,
      products: this.$root.$data.products,
      selectedSort: "initial",
      selectedProduct: null
    }
  },
  methods: {
    setSort(sort) {
      this.selectedSort = sort
    },
    setProduct(selectedProduct) {
      this.selectedProduct = selectedProduct
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";

#products {
  hr {
    margin-bottom: 20px;
  }
  .presentation {
    background-color: $grey-100;
    padding: 20px;
    padding-top: 0; // Filters already have margin
  }
}
</style>

