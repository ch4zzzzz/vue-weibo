<template>
  <div id="index">
    <WeiboHeader></WeiboHeader>
    <keep-alive>
      <component :is="indexComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "index",
  components: {
    Post: () => import('@/components/Post.vue'),
    WeiboHeader: () => import('@/components/WeiboHeader.vue'),
    Following: () => import('./Following.vue'),
    Hot: () => import('./Hot.vue')
  },

  computed: {
    ...mapGetters([
      'indexComponent'
    ])
  },
  created () {

  },

  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>


