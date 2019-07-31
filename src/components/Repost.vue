<template>
  <section class="repost"></section>
</template>

<script>
export default {
  name: 'Repost',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  created () {
    this.$axios
      .post()
  }
}
</script>

<style lang="scss" scoped>
.repost {
  background-color: rgba(#c0c0c0, 0.8)
}
</style>

