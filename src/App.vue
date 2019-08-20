<template>
    <router-view/>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  // created () {
  //   if (this.authority > 1) {
  //     const token = this.userToken;
  //     if (token.length > 0) {
  //     }
  //   }

  // },
  data () {
    return {
      worker: null
    }
  },
  computed: {
    ...mapGetters([
      'userToken',
      'authority'
    ])
  },
  // watch: {
  //   authority (val) {
  //     if (val > 1) {
  //       const token = this.userToken;

  //     }
  //   }
  // },
  methods: {
    ...mapMutations([
      'pushMessage'
    ]),
    
  }
}
</script>

<style>
html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
}

a {
  text-decoration: none;
  outline: none;
}

a:focus {
  outline: none;
}
</style>
