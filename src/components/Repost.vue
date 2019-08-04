<template>
  <section class="repost">
    <section class="content">
      <span>{{name}}</span>:
      {{post.content}}
    </section>
    <section class="repost-footer">
      <span>转发 {{post.repost.num}} </span>
      <span>评论 {{post.comment.num}} </span>
      <span>点赞 {{post.like.num}} </span>
    </section>
    <photo-container v-if="post.photos" class="photo-container" :photos="post.photos"></photo-container>
  </section>
</template>

<script>
export default {
  name: 'Repost',
  components: {
    'photo-container': () => import('@/components/PhotoContainer.vue')
  },
  data() {
    return {
      post: {
        content: "",
        photos: "",
        like: {
          num: 0
        },
        comment: {
          num: 0,
        },
        repost: {
          num: 0
        }
      }
    }
  },
  props: {
    pid: {
      type: String,
      required: true
    },
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.repost {
  background-color: rgba(#c0c0c0, 0.8);

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

  .repost-footer {
    color: rgba(#c0c0c0, 1);
    font-size: 0.8em;
  }
}
</style>

