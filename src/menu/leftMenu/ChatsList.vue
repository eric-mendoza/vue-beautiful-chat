<template>
  <div class="chats-list">
    <slot name="chats" :chats="chats">
      <ChatMenuItem
          v-for="(chat, chatIndex) in chats"
          :chat="chat"
          :active="active(chat)"
          :colors="colors"
          @opened-chat="$emit('opened-chat', $event)"
      >
        <template #chat-item="scopedProps">

        </template>
      </ChatMenuItem>
    </slot>
    <slot name="no-chats">
      <div v-if="chats.length === 0" class="no-open-chat sc-message--meta">
        No chats found.
      </div>
    </slot>
  </div>
</template>

<script>
  import ChatMenuItem from "./ChatMenuItem";
  export default {
    name: "ChatsList",
    props: {
      chats: {
        type: Array,
        required: true,
      },
      openedChat: {
        type: Object,
        default: null,
      },
      colors: {
        type: Object,
        required: true
      },
    },
    methods: {
      active(chat) {
        if (!this.openedChat) return false;
        return this.openedChat.id === chat.id;
      }
    },
    computed: {
    },
    components: {
      ChatMenuItem
    }
  }
</script>

<style scoped>
  .chats-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .sc-message--meta {
    color: white;
    font-size: small;
    font-style: italic;
    margin-bottom: 0px;
    margin-top: 5px;
    opacity: 0.8;
    text-align: center;
  }

  .no-open-chat {
    margin-top: 2rem;
  }
</style>