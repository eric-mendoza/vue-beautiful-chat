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
    justify-content: center;
    min-height: 75px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }
</style>