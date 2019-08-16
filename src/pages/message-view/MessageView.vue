<template>
  <div id="message-view">
    <header id="message-view-header">
      消息箱
    </header>
  </div>
</template>

<script>
export default {
  name: "MessageView",

}
</script>

<style lang="scss" scoped>
$header-line-height: 2.5rem;

#message-view-header {
  text-align: center;
  height: $header-line-height;
  line-height: $header-line-height;
  font-size: 1.2rem;
  background: rgba($color: #dcdcdc, $alpha: 0.4);
}
</style>