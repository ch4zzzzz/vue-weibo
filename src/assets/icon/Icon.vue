<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import './svg/iconfont.js';

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`;
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color:#808080;
}
</style>


