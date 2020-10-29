<template>
  <div class="left-menu-top" :style="{background: colors.topLeftMenu.bg, color: colors.topLeftMenu.text}">
    <div class="top-text">
      <slot name="top-left-menu">Top Left Menu</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopLeftMenu",
    props: {
      colors: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

  .left-menu > .left-menu-top > .top-text {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    margin-left: 5px;
  }

  .left-menu-top {
    display: flex;
    padding: 20px;
    justify-content: center;
  }
</style>