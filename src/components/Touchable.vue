<template>
  <div id="touchable" :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Touchable",
  props: {
    type: {
      type: String,
      default: "default"
    }
  }
}
</script>

<style lang="scss" scoped>
#touchable {
  text-align: center;
  user-select: none;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .25s;
  border-radius: 100px;
  padding: 5px 12px;
}
</style>
