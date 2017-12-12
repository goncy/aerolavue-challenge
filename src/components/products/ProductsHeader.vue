<template>
  <div id="products-header">
    <h1 class="title">Electronics</h1>
    <div class="overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/theme.scss";
@import "../../styles/mixins.scss";
@import "../../styles/responsive.scss";

#products-header {
  min-height: 300px;
  background-size: cover;
  background-position-y: center;
  background-position-x: right;
  background-image: url("../../assets/header-x2-plain.png");
  display: flex;
  align-items: flex-end;
  position: relative;

  .title {
    @include truncated;
    z-index: 2;
    font-size: 3em;
    font-weight: 700;
    color: $white;
    margin: 0;
    padding: 10px 20px;
    position: absolute;
  }

  .overlay {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($primary, 0.75);
  }
}

@media #{$small} {
  #products-header {
    align-items: center;
    justify-content: center;
  }
}
</style>
