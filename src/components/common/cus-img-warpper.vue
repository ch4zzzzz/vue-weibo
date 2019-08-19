<template>
  <div>
    <div :style="innerWarpperStyle" class="inner-warpper">
      <img :style="imgStyle" class="img" :src="src" :alt="alt">
    </div>
  </div>
</template>

<script>
// 宽度和宽高比固定的图片容器

export default {
  name: "cus-img-warpper",
  created () {
    let aspectRatio = this.aspectRatio;
    if (isNaN(aspectRatio)) {
      aspectRatio = 1;
    }
    this.innerWarpperStyle['padding-bottom'] = 100/aspectRatio + '%';

    if (this.shape === 'circle') {
      this.imgStyle['border-radius'] = "50%";
    }
  },
  data () {
    return {
      innerWarpperStyle: {
        width: "100%",
        "padding-bottom": "100%"
      },
      imgStyle: {}
    }
  },
  props: {
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
    },
    shape: {
      type: String,
      default: "circle"
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