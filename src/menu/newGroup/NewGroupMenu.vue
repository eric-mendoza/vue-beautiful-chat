<template>
  <div
      :class="{ collapsed: !show }"
      class="new-group-menu"
  >
    <slot name="new-group-menu">
      <div class="new-group-menu--container" >
        <TopNewGroupMenu :colors="colors" @close-new-group-menu="$emit('close-new-group-menu')">
          <template v-slot:top-new-group-menu>
            <slot name="top-new-group-menu"></slot>
          </template>
          <template v-slot:top-new-group-back>
            <slot name="top-new-group-back"></slot>
          </template>
        </TopNewGroupMenu>
        <div class="new-group-menu--list" :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}">
          <slot name="new-group-menu--body"></slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import TopNewGroupMenu from "./TopNewGroupMenu";
  export default {
    name: "NewGroupMenu",
    props: {
      colors: {
        type: Object,
        required: true
      },
      show: {
        type: Boolean,
        default: false,
      },
      contacts: {
        type: Array,
        default: () => []
      }
    },
    components: {
      TopNewGroupMenu,
    }
  }
</script>

<style scoped>
  .new-group-menu {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    transform: translateX(0%);
    transition: 400ms ease;
  }

  .new-group-menu.collapsed {
    transform: translateX(-200%);
  }

  .new-group-menu--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 260px;
    height: 100%;
  }

  .new-group-menu--list {
    /*display: flex;*/
    /*flex-direction: column;*/
    flex: 1;
  }
</style>