<template>
  <div id="weibo-header">
    <div id="header-row1">
      <div id="header-user-icon">
        <Icon name="user"/>
      </div>
      <div id="header-edit-icon">
        <Icon name="edit-square"/>
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
      'indexComponent'
    ])
  },
  methods: {
    ...mapMutations([
      'changeIndexComponent'
    ])
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

    #header-user-icon {
      float: left;
    }

    #header-edit-icon {
      float: right;
    }

    #header-user-icon, #header-edit-icon {
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
      transform: translate(-50%, 100%);
      bottom: 0;
      width: 1.5rem;
      height: 0.2rem;
      border-radius: 0.125rem;
      background-color: #FF8200;
    }
  }

}


</style>

