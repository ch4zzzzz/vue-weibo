<template>
  <nav class="nav">
    <router-link class="nav-link" v-for="router in routers" :key="router.id"
        :to="router.path"
        >
      {{router.meta.name}}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "cus-nav",
  props: {
    routers: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  text-align: left;

  .nav-link {
    display: inline-block;
    font-size: 1em;
    margin-left: 0.3em;
  }

  .nav-link:link { 
    text-decoration: none;
    color: blue;
  }
　.nav-link:active {
    text-decoration:blink;
  }
　.nav-link:hover {
    text-decoration:underline;
    color: red;
  } 
　.nav-link:visited {
    text-decoration: none;
    color: green;
  }
}

</style>

