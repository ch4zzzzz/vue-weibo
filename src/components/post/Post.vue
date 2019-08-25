<template>
  <article class="post">
    <header class="header">
      <div class="avatar-container">
        <img class="avatar lazy-load-img" :src="defaultImgSrc" :data-src="user.avatar" alt="avatar">
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
        <span v-for="repost in post.referenceList" :key="repost.id">//<a class="reference-user" href="javascript:void(0)">@{{repost.name}}</a>: {{repost.content}}</span>
      </span>
    </section>
    <repost v-if="post.hasReference" :pid="post.referenceOrign.pid"
        :uid="post.referenceOrign.uid"
        :name="post.referenceOrign.name"></repost>
    <photo-container v-if="post.photos" class="photo-container" :photos="post.photos"></photo-container>
    <footer class="footer" ref="footer" v-authority="authorityCheck">
      <div class="footer-button" @touchstart.stop="addLike">
        <div class="button-icon"><Icon name="like" :style="likeIconColor"></Icon></div><span class="button-description">{{post.like.num||"点赞"}}</span>
      </div>
      <div class="footer-button" @touchstart.stop="turnToComment">
        <div class="button-icon"><Icon name="message"></Icon></div><span class="button-description">{{post.comment.num||"评论"}}</span>
      </div>
      <div class="footer-button" @touchstart.stop="turnToRepost">
        <div class="button-icon"><Icon name="share"></Icon></div><span class="button-description">{{post.repost.num||"转发"}}</span>
      </div>
    </footer>
  </article>
</template>

<script>
import {formatter} from '@/util/date-formatter';
import { mapGetters } from 'vuex';

const requiredAuthority = 2;

export default {
  name: 'Post',
  components: {
    'photo-container': () => import('@/components/PhotoContainer.vue'),
    'repost': () => import('@/components/post/Repost.vue')
  },
  data () {
    return {
      likeIconColor: {
        color: "black",
      },
      defaultImgSrc: "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7"
    }
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
    },
    ...mapGetters([
      'authority'
    ]),
    authorityCheck () {
      return {
        requiredAuthority,
        currentAuthority: this.authority,
        callback: this.turnToLogin.bind(this)
      }
    }
  },
  methods: {
    addLike () {
      this.$axios
        .post('likingPost', {
          'pid': this.post.pid
        })
        .then(res => {
          this.likeIconColor['color'] = 'red';
          this.post.like.num++;
        })
        .catch(err => {

        })
      
    },
    turnToComment () {

    },
    turnToRepost () {

    },
    turnToLogin (event) {
      event.stopPropagation();
      this.$router.push({name: 'login'})
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

  .reference-user {
    text-decoration: none;
  }
}

.footer {
  margin-top: 0.5rem;
  float: left;
  clear: both;

  .footer-button {
    display: inline-block;
    width: 4rem;
    position: relative;
    font-size: 1rem;

    .button-icon {
      position: absolute;
    }

    .button-description {
      margin-left: 1.5rem
    }
  }
}

</style>

