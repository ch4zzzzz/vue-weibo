<template>
  <div id="index">
    <header id="index-header">
      weibo
    </header>
    <Post :content="content"></Post>
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
      content: "于是，我们就得到了SVG图标啦！如果你还需要其他图标，也按照这个步骤一个一个下载下来，很简单吧~ 然后把它们放在一个文件夹中，以备后用。"
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

<style scoped lang="scss">

</style>


