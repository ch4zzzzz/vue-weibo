<template>
  <div id="compose">
    <header id="compose-header">
      <div id="compose-back"><a href="#" @touchstart.prevent="turnBack"><Icon name="left"></Icon></a></div>
      <div id="compose-avatar-container">
        <img :src="user.avatar" alt="">
      </div>
      <div id="compose-send"><a href="#" 
          @touchstart.prevent="publish">发送</a></div>
    </header>
    <main id="compose-edit-area">
      <textarea name="" id="compose-textarea"
          placeholder="分享你的故事"
          v-model="content"
          maxlength="140"
          minlength="1"></textarea>
      <photo-container v-if="photos.length" class="photo-container" :photos="photos"
          @delete-photo="deletePhoto"
          @select-image="selectImages"></photo-container>
    </main>
    <footer id="compose-footer">
      <div class="icon-container" @touchstart="selectImages"><Icon name="image"></Icon></div>
      <input type="file" accept="image/*"
          multiple
          ref="imageSelector"
          style="display: none"
          @change="fillImages">
      <div class="icon-container"><Icon name="video" class="icon"></Icon></div>
      <div class="icon-container"><Icon name="smile" class="icon"></Icon></div>
      <div id="length-counter">{{contentLength}}</div>
    </footer>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Compose",
  components: {
    'photo-container': () => import('./components/ComposePhotoContainer.vue')
  },
  data () {
    return {
      content: "",
      photos: [],
      photoFiles: [],
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    contentLength () {
      return Math.round((this.content.replace(/[^\x00-\xff]/g, "01").length) / 2);
    }
  },
  methods: {
    turnBack () {
      this.$router.go(-1);
    },
    publish () {
      const content = this.content;
      if (!content.length) {
        return;
      }
      const formData = new FormData();
      formData.append('uid', this.user.uid);
      formData.append('content', this.content);
      formData.append('time', JSON.stringify(Date.now()));
      if (this.photoFiles.length > 0) {
        formData.append('photos[]', this.photoFiles)
      }
      this.$axios
        .post('post', {
          uid: this.user.uid,
          content: this.content,
          time: JSON.stringify(Date.now()),
        })
        .then(res => {
          
        })
        .catch(err => {
          
        })
      this.turnBack();
    },
    selectImages () {
      this.$refs['imageSelector'].touchstart();
    },
    fillImages (event) {
      const files = Array.prototype.slice.call(event.target.files);
      this.photoFiles.push(...files);
      if (files.length > 9) {
        alert(9)
        return;
      }
      for (let i=0, len=files.length; i<len; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          this.photos.push({src: reader.result});
        }
      }
    },
    deletePhoto (idx) {
      this.photos.splice(idx, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
#compose {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  
  $header-height: 3rem;
  
  & > #compose-header  {
    flex: 0 0 auto;
    height: $header-height;
    line-height: $header-height;
    width: 100%;
    background-color: rgba($color: #c0c0c0, $alpha: 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: border-box;

    & > #compose-back {
      flex: auto;
    }

    & > #compose-send {
      flex: auto;
      text-align: end;
    }

    & > #compose-avatar-container {
      flex: 0 0 auto;
      height: $header-height - 1rem;
      width: $header-height - 1rem;
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }



  & > #compose-edit-area {
    // padding: $header-height+1rem;
    margin: 1rem 1rem;
    flex: 1 1 auto;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    & > #compose-textarea {
      width: 100%;
      flex: 1 1 auto;
      border: 0;
      padding: 0;
      resize: none;
      font-size: 1.5rem;
      outline: none;
    }

    & > .photo-container::after {
      content: "";
      display: block;
      width: 0.01%;
      padding-bottom: 100%;
    }

    & > .photo-container {
      flex: 0 0 auto;
    }

    $placeholder-color: rgba($color: #c0c0c0, $alpha: 0.6);

    ::-moz-placeholder { color: $placeholder-color; }
    ::-webkit-input-placeholder { color: $placeholder-color; }
    :-ms-input-placeholder { color: $placeholder-color; }
  }

  $footer-height: 1.5rem;

  #compose-footer {
    box-sizing: content-box;
    padding: 0 0 1rem 0;
    height: $footer-height;
    line-height: $footer-height;
    font-size: $footer-height;

    & > .icon-container {
      display: inline-block;
      margin: 0 2rem 0 0.5rem;
      color: rgba($color: #808080, $alpha: 1);
    }

    & > #length-counter {
      float: right;
      margin-right: 1rem;
      color: rgba($color: #c0c0c0, $alpha: 0.6);
    }
  }

}
</style>
