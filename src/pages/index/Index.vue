<template>
  <div id="index">
  </div>
</template>

<script>
import {getPosts as getPostsUrl} from '@/request-api/api.js'

export default {
  name: "index",
  components: {
    Post: () => import('@/components/Post.vue')
  },
  data () {
    return {
      
    }
  },

  created () {

  },

  methods: {
    getPosts () {
      this.$axios
        .get(getPostsUrl)
        .then(res => {
          const data = res.data;
          if (data && data.success===true) {

          }
        })
    }
  }
}
</script>

<style scoped>

</style>


