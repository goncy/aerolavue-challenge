<template>
  <div id="products">
    <products-header></products-header>
    <div class="presentation">
      <products-filters />
      <hr>
      <products-list />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import ProductsHeader from "./ProductsHeader"
import ProductsFilters from "./ProductsFilters"
import ProductsList from "./products-list/ProductsList"

export default {
  name: "Products",
  components: { ProductsHeader, ProductsFilters, ProductsList },
  computed: mapState(["products"])
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

