<template>
  <div id="compose">
    <header id="compose-header">
      <div id="compose-back"><a href="javascript:void(0)" @click="turnBack"><Icon name="left"></Icon></a></div>
      <div id="compose-avatar-container">
        <img :src="user.avatar" alt="">
      </div>
      <div id="compose-send"><a href="javascript:void(0)" 
          @click="publish">发送</a></div>
    </header>
    <main id="compose-edit-area">
      <textarea name="" id="compose-textarea"
          placeholder="分享你的故事"
          v-model="content"
          maxlength="140"
          minlength="1"></textarea>
    </main>
    <footer id="compose-footer">
      <Icon name="image" class="icon"></Icon>
      <Icon name="video" class="icon"></Icon>
      <Icon name="smile" class="icon"></Icon>
      <div id="length-counter">{{contentLength}}</div>
    </footer>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Compose",
  data () {
    return {
      content: ""
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    contentLength () {
      return Math.round((this.content.replace(/[^\x00-\xff]/g, "01").length) / 2);
    }
  },
  methods: {
    turnBack () {
      this.$router.go(-1);
    },
    publish () {
      const content = this.content;
      if (!content.length) {
        return;
      }
      this.turnBack();
    }
  }
}
</script>

<style lang="scss" scoped>
#compose {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  
  $header-height: 3rem;
  
  & > #compose-header  {
    flex: 0 0 auto;
    height: $header-height;
    line-height: $header-height;
    width: 100%;
    background-color: rgba($color: #c0c0c0, $alpha: 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: border-box;

    & > #compose-back {
      flex: auto;
    }

    & > #compose-send {
      flex: auto;
      text-align: end;
    }

    & > #compose-avatar-container {
      flex: 0 0 auto;
      height: $header-height - 1rem;
      width: $header-height - 1rem;
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  & > #compose-edit-area {
    // padding: $header-height+1rem;
    margin: 1rem 1rem;
    flex: 1 1 auto;

    & > #compose-textarea {
      width: 100%;
      height: 100%;
      border: 0;
      resize: none;
      font-size: 1.5rem;
      outline: none;
    }

    $placeholder-color: rgba($color: #c0c0c0, $alpha: 0.6);

    ::-moz-placeholder { color: $placeholder-color; }
    ::-webkit-input-placeholder { color: $placeholder-color; }
    :-ms-input-placeholder { color: $placeholder-color; }
  }

  $footer-height: 1.5rem;

  #compose-footer {
    box-sizing: content-box;
    padding: 0 0 1rem 0;
    height: $footer-height;
    line-height: $footer-height;
    font-size: $footer-height;

    & > .icon {
      display: inline-block;
      margin: 0 2rem 0 0.5rem;
      color: rgba($color: #808080, $alpha: 1);
    }

    & > #length-counter {
      float: right;
      margin-right: 1rem;
      color: rgba($color: #c0c0c0, $alpha: 0.6);
    }
  }

}
</style>
