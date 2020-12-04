<template>
  <div class="profile-menu--top" :style="{background: colors.topLeftMenu.bg, color: colors.topLeftMenu.text}">
    <div class="profile-menu--top-back" @click="$emit('close-profile-menu')">
      <slot name="top-profile-back">
        &longleftarrow;
      </slot>
    </div>
    <div class="profile-menu--top-text">
      <slot name="top-profile-menu">
        Perfil
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopProfileMenu",
    props: {
      colors: {
        type: Object,
        required: true,
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .profile-menu--top-text {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    margin-left: 5px;
    flex: 1;
  }

  .profile-menu--top {
    display: flex;
    justify-content: left;
    align-content: center;
    min-height: 75px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }

  .profile-menu--top-back {
    width: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    margin-right: 5px;
    cursor: pointer;
  }
</style>