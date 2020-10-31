<template>
  <div
      class="chat-menu-item--container"
      :class="active ? 'active' : ''"
      @click="openedNewChat"
  >
    <div class="overlay"></div>
    <slot name="chat-item" :chat="chat">
      <div class="chat-menu-item">
        <img v-if="chat.imageUrl" class="chat-menu-item--img" :src="chat.imageUrl" alt="" />
        <div class="chat-menu-item--body--container" style="">
          <div class="chat-menu-item--body">
            <!--     Chat title and last message time       -->
            <div class="chat-menu-item--body--header">
              <div class="chat-menu-item--name">
                {{ chatWindowTitle }}
              </div>
              <div class="chat-menu-item--time">
                {{ time }}
              </div>
            </div>

            <!--      Last message and new message alert      -->
            <div class="chat-menu-item--body--content">
              <div class="chat-menu-item--message">
                {{ lastMessage }}
              </div>
              <div v-if="chat.newMessagesCount > 0" class="chat-menu-item--alert" :style="{background: colors.alert.bg, color: colors.alert.text}">
                {{ chat.newMessagesCount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </slot>
    <hr class="chat-menu-item--hr">
  </div>
</template>

<script>
  import {chatTitle, time} from "../../formatters";

  export default {
    name: "ChatMenuItem",
    props: {
      chat: {
        type: Object,
        required: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
      colors: {
        type: Object,
        required: true
      },
    },
    methods: {
      openedNewChat() {
        this.$emit('opened-chat', this.chat);
      }
    },
    computed: {
      time() {
        return time(this.chat.datetime);
      },
      chatWindowTitle() {
        return chatTitle(this.chat)
      },
      lastMessage() {
        let lastIndex = this.chat.messageList.length - 1;
        return this.chat.messageList[lastIndex].data.text;
      }
    }
  }
</script>

<style scoped>
  .chat-menu-item--container {
    min-height: 75px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .active > .overlay{
    width:100%;
    height:100%;
    position:absolute;
    background-color: #000;
    opacity:0.2;
    z-index: 0;
  }

  .chat-menu-item--container:hover > .overlay {
    width:100%;
    height:100%;
    position:absolute;
    background-color: #000;
    opacity:0.1;
    z-index: 0;
  }

  .chat-menu-item {
    display: flex;
    z-index: 1;
    width: 100%;
    flex: 1;
  }

  .chat-menu-item--body--container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 1em;
    min-width: 0;
  }

  .chat-menu-item--body {
    display: flex;
    flex-direction: column;
    padding: 1em 0 1em 0;
    flex: 1;
    justify-content: center;
  }

  .chat-menu-item--img {
    border-radius: 50%;
    align-self: center;
    padding: 10px;
    height: 26px;
    width: 26px;
    flex: 0 0 auto;
  }

  .chat-menu-item--body--header {
    display: flex;
  }

  .chat-menu-item--body--content {
    display: flex;
  }

  .chat-menu-item--name {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1 1 auto;
    flex-basis: 0;
  }

  .chat-menu-item--time {
    font-size: 12px;
    text-align: right;
    width: 60px;
    color: rgba(255, 255, 255, 0.70);
    flex: 0 0 auto;
  }

  .chat-menu-item--alert {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    text-align: center;
    margin: auto;
    font-size: 12px;
    font-weight: 500;
    flex: 0 0 auto;
  }

  .chat-menu-item--message {
    color: rgba(255, 255, 255, 0.70);
    font-size: 14px;
    flex: 1 1 auto;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .chat-menu-item--hr {
    margin: 0 1em 0 0 !important;
    width: 100%;
    color: rgba(255, 255, 255, 0.3);
  }
</style>