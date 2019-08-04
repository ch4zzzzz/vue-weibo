<template>
  <article class="post">
    <header class="header">
      <div class="avatar-container">
        <img class="avatar" :src="user.avatar" alt="avatar">
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
      {{post.content}}
      <span v-if="post.hasReference">
        <span v-for="repost in post.referenceList" :key="repost.id">//@{{repost.name}}: {{repost.content}}</span>
      </span>
    </section>
    <repost v-if="post.hasReference" :pid="post.referenceOrign.pid"
        :uid="post.referenceOrign.uid"
        :name="post.referenceOrign.name"></repost>
    <photo-container v-if="post.photos" class="photo-container" :photos="post.photos"></photo-container>
    <footer class="footer">
      <div class="footer-button"><Icon name="like"></Icon>点赞{{post.like.num||""}}</div>
      <div class="footer-button"><Icon name="message"></Icon>评论{{post.comment.num||""}}</div>
      <div class="footer-button"><Icon name="share"></Icon>转发{{post.repost.num||""}}</div>
    </footer>
  </article>
</template>

<script>
import {formatter} from '@/util/date-formatter';

export default {
  name: 'Post',
  components: {
    'photo-container': () => import('@/components/PhotoContainer.vue'),
    'repost': () => import('@/components/Repost.vue')
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '林允儿',
          uid: '00000000',
          avatar: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
      }}
    },
    post: {
      type: Object,
    },
  },
  computed: {
    showedTime () {
      return formatter(this.post.time);
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
  margin-bottom: 1rem;
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
  height: 100%;
  object-fit: cover;
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
  clear: both;

  .footer-button {
    display: inline-block;
    margin-right: 1.5rem;
  }
}

</style>

