<template>
  <div id="weibo-header">
    <div id="header-row1">
      <div id="header-user-icon" @click.capture.stop="turnToUserHome" class="header-icon header-left-icon">
        <Icon name="user"/>
      </div>

      <div id="header-edit-icon" @click.capture.stop="turnToPostEditor" class="header-icon header-right-icon">
        <Icon name="edit-square"/>
      </div>
      <div id="header-message-icon" @click.capture.stop="turnToMessage" class="header-icon header-right-icon">
        <Icon name="mail"></Icon>
      </div>
      <cus-field v-model="searchContent" iconName="search"
          placeholder="搜索"
          id="weibo-header-search"
          />
    </div>

    <div id="header-row2">
      <span v-for="item in indexComponents"
          class="component-selector"
          :key="item.id"
          :class="{actived: item.component===indexComponent}"
          @click="changeIndexComponent(item.component)">
        {{item.name}}
      </span>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import indexComponents from '@/pages/index/index-components.js'

const requiredAuthority = 2;

export default {
  name: "WeiboHeader",
  components: {
    'cus-field': () => import('@/components/common/cus-field.vue'),
    'cus-nav': () => import('@/components/common/cus-nav.vue')
  },
  data () {
    return {
      searchContent: "",
      indexComponents,
    }
  },
  computed: {
    ...mapGetters([
      'indexComponent',
      'authority'
    ]),
    hasAuthority () {
      return this.authority >= requiredAuthority ? true : false;
    }
  },
  methods: {
    ...mapMutations([
      'changeIndexComponent'
    ]),
    
    turnToLogin () {
      this.$router.push({name: 'login'});
    },
    turnToUserHome () {
      if (!this.hasAuthority) {
        return turnToLogin();
      }
    },
    turnToPostEditor () {
      if (!this.hasAuthority) {
        return turnToLogin();
      }
    },
    turnToMessage () {
      if (!this.hasAuthority) {
        return turnToLogin();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$line-height: 1.8rem;
$font-size: 1.5rem;

#weibo-header {
  background: rgba($color: #dcdcdc, $alpha: 0.4);
  font-size: $font-size;
  text-align: center;
  $icon-container-width: $font-size + 1rem;
  clear: both;
  $padding: 0.5rem;
  padding-top: $padding;
  padding-bottom: $padding;

  #header-row1 {
    width: 100%;
    height: $line-height;
    margin-bottom: $padding;

    .header-left-icon {
      float: left;
    }

    .header-right-icon {
      float: right;
    }

    .header-icon {
      width: $icon-container-width;
      height: $line-height;
      line-height: $line-height;
    }

    #weibo-header-search {
      height: $line-height;
    }
  }

  #header-row2 {
    font-size: 1rem;
    text-align: left;

    .component-selector {
      color: #808080;
      margin-left: 0.5rem;
      position: relative;
      display: inline-block;
    }
    .actived:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%, 200%);
      bottom: 0;
      width: 1.5rem;
      height: 0.1rem;
      border-radius: 0.125rem;
      background-color: rgba(#000000, 0.6);
    }
  }

}


</style>

