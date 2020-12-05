<template>
  <div
      :class="{ collapsed: !showProfile }"
      class="profile-menu"
  >
    <slot name="profile-menu">
      <div class="profile-menu--container" >
        <TopProfileMenu :colors="colors" @close-profile-menu="$emit('close-profile-menu')">
          <template v-slot:top-profile-menu>
            <slot name="top-profile-menu"></slot>
          </template>
          <template v-slot:top-profile-back>
            <slot name="top-profile-back"></slot>
          </template>
        </TopProfileMenu>
        <div class="profile-menu--list" :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}">
          <slot name="profile-menu--body"></slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import TopProfileMenu from "./TopProfileMenu";
  export default {
    name: "Profile",
    props: {
      colors: {
        type: Object,
        required: true
      },
      showProfile: {
        type: Boolean,
        default: false,
      },
      profile: {
        type: Object,
        default: () => {
          return {
            imageUrl: ''
          }
        }
      }
    },
    components: {
      TopProfileMenu,
    }
  }
</script>

<style scoped>
  .profile-menu {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    transform: translateX(0%);
    transition: 400ms ease;
  }

  .profile-menu.collapsed {
    transform: translateX(-200%);
  }

  .profile-menu--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 260px;
    height: 100%;
  }

  .profile-menu--list {
    /*display: flex;*/
    /*flex-direction: column;*/
    flex: 1;
  }
</style>