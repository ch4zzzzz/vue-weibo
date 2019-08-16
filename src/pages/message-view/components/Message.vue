<template>
  <div class="message">
    <img-warpper></img-warpper>
  </div>  
</template>

<script>
export default {
  name: "message",
  created() {
    this.$axios
      .get('message')
      .then(res => {
        const data = res.data;
      })
      .catch(err => {
        
      })
  },
  components: {
    'img-warpper': () => import('@/components/common/cus-img-warpper')
  },
  props: {
    sender: {
      type: Object,
      required: true
    },
    
  },
}
</script>

<style lang="scss" scoped>

</style>
