<template>
  <div
      class="left-menu"
      :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}"
  >
    <!--  Top content  -->
    <TopLeftMenu
        :colors="colors"
    >
      <template v-slot:top-left-menu>
        <slot name="top-left-menu"> </slot>
      </template>
    </TopLeftMenu>

    <!--  Multiple existing chats  -->
    <div class="left-menu-list">
      <ChatsList
          :chats="chats"
          :opened-chat="openedChat"
          :colors="colors"
          @opened-chat="$emit('opened-chat', $event)"
      >
        <template #chats="scopedProps">

        </template>
      </ChatsList>
    </div>


    <!--  Bottom section of menu  -->
    <div class="left-menu-bottom"></div>
  </div>
</template>

<script>
  import TopLeftMenu from "./TopLeftMenu";
  import ChatsList from "./ChatsList";
  export default {
    name: "LeftMenu",
    components: {
      TopLeftMenu,
      ChatsList
    },
    props: {
      colors: {
        type: Object,
        required: true
      },
      chats: {
        type: Array,
        required: true
      },
      openedChat: {
        type: Object,
        default: null,
      },
    },
  }
</script>

<style scoped>
  .left-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    min-width: 260px;
    height: 100%;
  }


  .left-menu-list {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .left-menu-bottom {
    display: flex;
    padding: 20px;
  }


</style>