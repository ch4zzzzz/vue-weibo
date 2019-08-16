<template>
  <div :style="warpperStyle">
    <div :style="innerWarpperStyle" class="inner-warpper">
      <img class="img" :src="src" :alt="alt">
    </div>
  </div>
</template>

<script>
// 宽度和宽高比固定的图片容器

export default {
  name: "cus-img-warpper",
  created () {
    this.warpperStyle['width'] = this.width;
    let aspectRatio = this.aspectRatio;
    if (isNaN(aspectRatio)) {
      aspectRatio = 1;
    }
    this.innerWarpperStyle['padding-bottom'] = 100/aspectRatio + '%';
  },
  data () {
    return {
      warpperStyle: {
        width: "1em"
      },
      innerWarpperStyle: {
        width: "100%",
        "padding-bottom": "100%"
      }
    }
  },
  props: {
    width: {
      type: String,
      default: "1em"
    },
    aspectRatio: {
      type: String,
      default: '1'
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "image"
    }
  }
}
</script>

<style lang="scss" scoped>
.inner-warpper {
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
</style>