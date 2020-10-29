<template>
  <div class="chat-menu-item--container" :class="active ? 'active' : ''">
    <div class="overlay"></div>
    <slot name="chat-item" :chat="chat">
      <div class="chat-menu-item">
        <img v-if="chat.imageUrl" class="chat-menu-item--img" :src="chat.imageUrl" alt="" />
        <div class="" style="display: flex; flex-direction: column; width: 100%; padding-right: 1em">
          <div class="chat-menu-item--body">
            <div class="chat-menu-item--body--header">
              <div class="chat-menu-item--name">
                {{ chat.name }}
              </div>
              <div class="chat-menu-item--time">
                {{ time }}
              </div>
            </div>
            <div class="chat-menu-item--message">
              {{ chat.lastMessage }}
            </div>
          </div>
        </div>
      </div>
    </slot>
    <hr class="chat-menu-item--hr">
  </div>
</template>

<script>
  import { time } from "../../formatters";

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
      }
    },
    computed: {
      time() {
        return time(this.chat.datetime);
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
  }

  .chat-menu-item--body--header {
    display: flex;
  }

  .chat-menu-item--name {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
  }

  .chat-menu-item--time {
    font-size: 12px;
    text-align: right;
    color: rgba(255, 255, 255, 0.70);
  }

  .chat-menu-item--message {
    color: rgba(255, 255, 255, 0.70);
    font-size: 14px;
  }

  .chat-menu-item--hr {
    margin: 0 1em 0 0 !important;
    width: 100%;
    color: rgba(255, 255, 255, 0.3);
  }
</style>