<template>
  <div id="products-filters">
    <div class="count">
      <span class="bold">{{count}}</span> PRODUCTS
    </div>
    <div class="sorts">
      <touchable @click.native="setSort('initial')" class="sort" :type="getType('initial')">Most recent</touchable>
      <touchable @click.native="setSort('lowest_price')" class="sort" :type="getType('lowest_price')">Lowest price</touchable>
      <touchable @click.native="setSort('highest_price')" class="sort" :type="getType('highest_price')">Highest price</touchable>
    </div>
  </div>
</template>

<script>
import Touchable from "../../components/Touchable"

export default {
  components: { Touchable },
  props: {
    count: Number,
    selectedSort: String
  },
  methods: {
    getType(sort) {
      return this.selectedSort === sort ? "primary" : "default"
    },
    setSort(by) {
      this.$emit("setSort", by)
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
