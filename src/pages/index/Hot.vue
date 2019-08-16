<template>
  <div id="hot">
    <Post v-for="post in posts" :key="post.id" :post="post" :user="post.user"></Post>
  </div>
</template>

<script>
import {getHotPosts} from '@/request-api/api.js'

export default {
  name: "Hot",
  created () {
    this.getPosts();
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      this.$axios
        .get('hot-posts')
        .then(res => {
          const data = res.data;
          this.posts = data.posts;
        })
        .catch(err => {
          
        })
    }
  }
}
</script>

