<template>
  <div id="following">
    <Post v-for="post in posts" :key="post.id" :post="post" :user="post.user"></Post>
  </div>
</template>

<script>
import {getFollowingPosts} from '@/request-api/api.js'

export default {
  name: 'Following',
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
        .get('following-posts')
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

<style lang="scss" scoped>
#following {
  width: 100%;
}
</style>

