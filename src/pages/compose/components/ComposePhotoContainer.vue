<template>
  <section class="photo-container">
    <div class="warpper" :style="warpperWidthStyle" v-for="photo in photos" :key="photo.id">
      <div class="img-warpper">
        <img :src="photo.src" alt="photo" @error="onImgLoadError">
      </div>
      <div  v-if="photos.length>1" class="delete-icon"
          @click="deletePhoto(photo)"><Icon name="close"></Icon></div>
    </div>
    <div class="warpper add-warpper" v-if="photos.length > 1 && photos.length < 9"
        @click="addPhoto">
      <div class="img-warpper">
        <Icon class="add-icon" name="plus"></Icon>
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

  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  created () {
    const photos = this.photos;
    const len = photos.length;
    if (len === 1) {
      this.warpperWidthStyle.width = '100%';
    } else {
      this.warpperWidthStyle.width = '33.33%';      
    }
  },
  watch: {
    photos (arr) {
      const len = arr && arr.length;
      if (!len) {
        return;
      }
      if (len === 1) {
        this.warpperWidthStyle.width = '100%';
      } else {
        this.warpperWidthStyle.width = '33.33%';      
      }
    }
  },
  methods: {
    onImgLoadError (event) {
      const element = event.target;
      element.setAttribute('src', '');
    },
    deletePhoto (photo) {
      const photos = this.photos;
      const idx = photos.indexOf(photo);
      if (idx > -1) {
        this.$emit('delete-photo', idx);
      }
    },
    addPhoto () {
      this.$emit('select-image')
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-container {
  margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;

  $warp-padding: 0.1rem;

  .warpper {
    float: left;
    padding: 0 $warp-padding $warp-padding 0;
    box-sizing: border-box;
    position: relative;
    width: 33.33%;

    & > .img-warpper {
      width: 100%;
      padding-bottom: 100%;
      position: relative;

      & > img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    & > .delete-icon {
      position: absolute;
      top: 0;
      right: $warp-padding;
      background: rgba($color: #c0c0c0, $alpha: 0.3)
    }

  }
}

.add-warpper {
  border: 1px dashed transparent;
  background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
}

.add-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}
</style>


