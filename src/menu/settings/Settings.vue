<template>
  <div
      :class="{ collapsed: !showSettings }"
      class="settings-menu"
      ref="settings"
      tabindex="0"
      @keydown.esc="$emit('close-settings')"
  >
    <slot name="settings">
      <div class="settings-menu--container" >
        <TopSettings :colors="colors" :rounded-corners="roundedCorners" @close-settings="$emit('close-settings')">
          <template v-slot:top-settings>
            <slot name="top-settings"></slot>
          </template>
          <template v-slot:top-settings-back>
            <slot name="top-settings-back"></slot>
          </template>
        </TopSettings>
        <div class="settings-menu--list" :class="{'bottom-left-rounded-corner': roundedCorners}" :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}">
          <slot name="settings--body"></slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import TopSettings from "./TopSettings";
  export default {
    name: "Settings",
    props: {
      colors: {
        type: Object,
        required: true
      },
      showSettings: {
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
      },
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showSettings() {
        if (this.showSettings) {
          this.$refs.settings.focus();
        }
      }
    },
    components: {
      TopSettings,
    }
  }
</script>

<style scoped>
  .settings-menu {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    transform: translateX(0%);
    transition: 400ms ease;
  }

  .settings-menu.collapsed {
    transform: translateX(-200%);
  }

  .settings-menu--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 260px;
    height: 100%;
  }

  .settings-menu--list {
    /*display: flex;*/
    /*flex-direction: column;*/
    flex: 1;
  }
</style>