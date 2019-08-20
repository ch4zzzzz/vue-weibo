<template>
  <div class="message">
    <div v-if="type==='icon'" class="icon-box left-item">
      <slot name="icon"></slot>
    </div>
    <img-warpper v-else class="img-warpper left-item" :src="avatar"
        @error="resetAvatar"></img-warpper>
    <div class="message-box">
      <div class="sender-name">
        {{sender.name}}
      </div>
      <div class="message-content">
        new item
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "message",
  created() {
    const sender = this.sender;
    if (sender.avatar) {
      this.avatar = sender.avatar;
    }
  },
  components: {
    'img-warpper': () => import('@/components/common/cus-img-warpper')
  },
  data () {
    return {
      avatar: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    }
  },
  props: {
    sender: {
      type: Object,
      required: true
    },
    type: {
      type: String
    }
  },
  methods: {
    resetAvatar () {
      this.avatar = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  height: 5rem;
  display: flex;
  align-items: center;
}

$line-height: 3rem;
.left-item {
  flex: 0 0 auto;
  margin-left: 0.5rem;
}

.img-warpper {
  width: $line-height;
}

.icon-box {
  width: $line-height;
  height: $line-height;
  font-size: $line-height - 1rem;
  text-align: center;
  border-radius: 50%;
}

.message-box {
  flex: auto;
  height: $line-height;
  margin-left: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%, 400%);
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    border-radius: 0.125rem;
    background-color: rgba($color: #dcdcdc, $alpha: 0.4);
  }
}

.sender-name {
  font-size: 1rem;
  flex: auto;
}

.message-content {
  font-size: 0.75rem;
  flex: auto;
}
</style>
