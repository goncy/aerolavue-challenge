<template>
  <img
    id="fallback-image"
    @error="imageFailed"
    :src="src"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  },
  methods: {
    imageFailed(event) {
      event.target.src =
        "http://via.placeholder.com/252x182/ffffff?text=NO%20IMAGE"
    }
  }
}
</script>

<style>
#fallback-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
