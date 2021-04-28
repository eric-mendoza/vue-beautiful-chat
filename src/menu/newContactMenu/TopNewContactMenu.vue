<template>
  <div class="new-contacts-menu--top" :class="{'top-left-rounded-corner': roundedCorners}" :style="{background: colors.topLeftMenu.bg, color: colors.topLeftMenu.text}">
    <div class="new-contacts-menu--top-back" @click="$emit('close-new-contact-menu')">
      <slot name="new-top-contacts-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
      </slot>
    </div>
    <div class="new-contacts-menu--top-text">
      <slot name="new-top-contacts-menu">
        Nuevo contacto
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNewContactMenu",
    props: {
      colors: {
        type: Object,
        required: true,
      },
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .new-contacts-menu--top-text {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 400;
    margin-left: 5px;
    flex: 1;
  }

  .new-contacts-menu--top {
    display: flex;
    justify-content: left;
    align-content: center;
    height: 65px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }

  .new-contacts-menu--top-back {
    width: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    margin-right: 5px;
    cursor: pointer;
  }

  .new-contacts-menu--top-back svg path {
    fill: white !important;
  }
</style>