<template>
  <div id="message-view" @touchstart="turnBack">
    <header id="message-view-header">
      <div class="icon-box">
        <Icon name="left"></Icon>
      </div>
      消息箱
    </header>

    <Message :sender="basicSenders[0]" type="icon">
      <template #icon>
        <div style="width: 100%; height: 100%; background: #6495ed; border-radius: 50%">
          <span style="line-height: 100%;">@</span>
        </div>
      </template>
    </Message>
    <Message :sender="basicSenders[1]" type="icon">
      <template #icon>
        <div style="width: 100%; height: 100%; background: #7fff00; border-radius: 50%">
          <Icon :name="basicSenders[1].icon"></Icon>
        </div>
      </template>
    </Message>
    <Message :sender="basicSenders[2]" type="icon">
      <template #icon>
        <div style="width: 100%; height: 100%; background: #ff7f50; border-radius: 50%">
          <Icon :name="basicSenders[2].icon"></Icon>
        </div>
      </template>
    </Message>
    <Message :sender="{name: '0', avatar:'xxxx'}"></Message>
  </div>
</template>

<script>
import Message from './components/Message'

export default {
  name: "MessageView",
  components: {
    Message
  },
  data () {
    return {
      basicSenders: [
        {
          name: "@我的",
        },
        {
          name: "评论",
          icon: "message"
        },
        {
          name: "赞",
          icon: "like"
        }
      ]
    }
  },
  methods: {
    turnBack () {
      this.$router.go(-1);
    }
  }
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
  position: relative;
}

.icon-box {
  padding-left: 0.5rem;
  left: 0;
  height: 100%;
  position: absolute;
}
</style>