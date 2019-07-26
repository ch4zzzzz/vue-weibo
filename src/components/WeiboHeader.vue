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

    <div id="header-rou2">
      <cus-nav :routers="indexRouters"></cus-nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "WeiboHeader",
  components: {
    'cus-field': () => import('@/components/common/cus-field.vue'),
    'cus-nav': () => import('@/components/common/cus-nav.vue')
  },
  data () {
    return {
      searchContent: "",
      indexRouters: [
        {
          path: "a",
          meta: {
            name: "关注"
          }
        },
        {
          path: "b",
          meta: {
            name: "热门"
          }
        }
      ]
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

}


</style>

