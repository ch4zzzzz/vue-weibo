<template>
  <article class="post">
    <header class="header">
      <div class="avatar-container">
        <img class="avatar" :src="user.img" alt="avatar">
      </div>
      <div class="post-info">
        <span class="user-name">
          {{user.name}}
          <br/>
        </span>
        <small style="color: #808080">
          {{showedTime}}
        </small>
      </div>
    </header>
    <section class="content">
      {{content}}
    </section>
    <section class="photo"></section>
    <footer class="footer">
      <div class="footer-button"><Icon name="like"></Icon>点赞</div>
      <div class="footer-button"><Icon name="message"></Icon>评论</div>
      <div class="footer-button"><Icon name="share"></Icon>转发</div>
      <!-- <mt-button class="footer-button" type="default">点赞</mt-button>
      <mt-button class="footer-button" type="default">评论</mt-button>
      <mt-button class="footer-button" type="default">转发</mt-button> -->
    </footer>
  </article>
</template>

<script>
import {formatter} from '@/util/date-formatter';
import { Button } from 'mint-ui';

export default {
  name: 'Post',
  components: {
    [Button.name]: Button
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '林允儿',
          uid: '00000000',
          img: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
      }}
    },
    time: {
      type: String,
      default: () => new Date().getTime().toString()
    },
    content: {
      type: String,
      default: "Hello world."
    }
  },
  computed: {
    showedTime () {
      return formatter(this.time);
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

$header-height: 3rem;

.header {
  height: $header-height;
  width: 100%;
  display: block;
}

.avatar-container {
  width: $header-height;
  height: $header-height;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: auto;
}

.post-info {
  box-sizing: border-box;
  width: 100%;
  padding-left: $header-height + 1rem;
  height: $header-height;
  
  span, small {
    vertical-align: middle;
  }
}
// .user-name {
//   line-height: $header-height;
// }

$post-text-line-height: 1.2rem;
$post-text-rows: 5;

.content {
  line-height: $post-text-line-height;
  font-size: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: $post-text-rows;
  -webkit-box-orient: vertical; 
}

.footer {
  margin-top: 0.5rem;

  .footer-button {
    display: inline-block;
    margin-right: 1.5rem;
  }
}

</style>

