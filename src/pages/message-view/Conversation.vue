<template>
  <div>
    <header id="conversation-header">{{sender.name || `error`}}</header>
  </div>
</template>

<script>
export default {
  name: "Conversation",
  props: {
    sender: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#conversation-header {
  text-align: center;
  height: $header-line-height;
  line-height: $header-line-height;
  font-size: 1.2rem;
  background: rgba($color: #dcdcdc, $alpha: 0.4);
  position: relative;
}
</style>