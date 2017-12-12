<template>
  <div id="products-filters">
    <div class="count">
      <span class="bold">{{products.length}}</span> PRODUCTS
    </div>
    <div class="sorts">
      <touchable
        @click.native="setSort('initial')"
        class="sort"
        :type="getType('initial')"
      >
        Most recent
      </touchable>
      <touchable
        @click.native="setSort('lowest_price')"
        class="sort"
        :type="getType('lowest_price')"
      >
        Lowest price
      </touchable>
      <touchable
        @click.native="setSort('highest_price')"
        class="sort"
        :type="getType('highest_price')"
      >
        Highest price
      </touchable>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

import Touchable from "../../components/Touchable"

export default {
  name: "ProductsFilters",
  components: { Touchable },
  computed: mapState(["sort", "products"]),
  methods: {
    ...mapMutations(["setSort"]),
    getType(sort) {
      return this.sort === sort ? "primary" : "default"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme.scss";
@import "../../styles/responsive.scss";

#products-filters {
  min-height: 50px;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .count {
    color: $grey-800;
    font-size: 24px;

    .bold {
      font-weight: 700;
    }
  }

  .sorts {
    display: flex;

    .sort:not(:first-child) {
      margin-left: 10px;
    }
  }
}

@media #{$small} {
  #products-filters {
    flex-direction: column;
    padding-bottom: 15px;

    .count {
      margin-bottom: 10px;
    }
  }
}
</style>
