<template>
  <section class="photo-container">
    <div class="warpper" :style="warpperWidthStyle" v-for="photo in showedPhotos" :key="photo.id">
      <div class="img-warpper">
        <img :src="photo.src" alt="photo" @error="onImgLoadError">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PhotoContainer",
  data () {
    return {
      warpperWidthStyle: {
        width: '33.33%'
      },
      errorImg: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
    }
  },
  computed : {
    showedPhotos () {
      const photos = this.photos;
      if (photos.length <= 9) {
        return photos;
      } else {
        return photos.slice(0, 8);
      }
    }
  },
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  created () {
    console.log(this.photos)
    const photos = this.photos;
    const len = photos.length;
    if (len === 1) {
      this.warpperWidthStyle.width = '100%';
    } else if (len === 4 || len === 2) {
      this.warpperWidthStyle.width = '50%';      
    }
  },
  methods: {
    onImgLoadError (event) {
      const element = event.target;
      element.setAttribute('src', '');
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-container {
  margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;

  .warpper {
    float: left;
    padding: 0 0.1rem 0.1rem 0;
    box-sizing: border-box;

    .img-warpper {
      width: 100%;
      padding-bottom: 100%;
      position: relative;

      img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}



</style>


