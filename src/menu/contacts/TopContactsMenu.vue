<template>
  <div class="contacts-menu--top" :style="{background: colors.topLeftMenu.bg, color: colors.topLeftMenu.text}">
    <slot name="top-contacts-menu">
      <div class="contacts-menu--top-back" @click="$emit('close-contacts-menu')">
        &longleftarrow;
      </div>
      <div class="contacts-menu--top-text">
        Nuevo chat
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "TopContactsMenu",
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
  .contacts-menu--top-text {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    margin-left: 5px;
    flex: 1;
  }

  .contacts-menu--top {
    display: flex;
    justify-content: left;
    align-content: center;
    min-height: 75px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }

  .contacts-menu--top-back {
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