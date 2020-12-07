<template>
  <div
      :class="{ collapsed: !show }"
      class="new-contacts-menu"
  >
    <slot name="new-contacts-menu">
      <div class="new-contacts-menu--container" >
        <TopNewContactMenu :colors="colors" @close-new-contact-menu="$emit('close-new-contact-menu')">
          <template v-slot:top-new-contacts-menu>
            <slot name="top-new-contacts-menu"></slot>
          </template>
          <template v-slot:top-new-contacts-back>
            <slot name="top-new-contacts-back"></slot>
          </template>
        </TopNewContactMenu>
        <div class="new-contacts-menu--list" :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}">
          <slot name="new-contact-menu--body"></slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import TopNewContactMenu from "./TopNewContactMenu";
  export default {
    name: "NewContactMenu",
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
      TopNewContactMenu
    }
  }
</script>

<style scoped>
  .new-contacts-menu {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    transform: translateX(0%);
    transition: 400ms ease;
  }

  .new-contacts-menu.collapsed {
    transform: translateX(-200%);
  }

  .new-contacts-menu--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 260px;
    height: 100%;
  }

  .new-contacts-menu--list {
    /*display: flex;*/
    /*flex-direction: column;*/
    flex: 1;
  }
</style>