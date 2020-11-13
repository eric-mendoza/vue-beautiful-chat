<template>
  <div class="chat-menu-container">
    <!--  Left menu  -->
    <LeftMenu
      :colors="colors"
      :chats="chats"
      :opened-chat="openedChat"
      @opened-chat="$emit('opened-chat', $event)"
    >
      <template v-slot:top-left-menu>
        <slot name="top-left-menu"> </slot>
      </template>
    </LeftMenu>

    
    <!--  Chat area  -->
    <ChatArea
        v-if="openedChat"
        :message-list="openedChat.messageList"
        :on-user-input-submit="onMessageWasSent"
        :participants="openedChat.participants"
        :title="chatWindowTitle"
        :show-emoji="showEmoji"
        :show-file="showFile"
        :show-edition="showEdition"
        :show-deletion="showDeletion"
        :show-confirmation-deletion="showConfirmationDeletion"
        :confirmation-deletion-message="confirmationDeletionMessage"
        :show-header="showHeader"
        :placeholder="placeholder"
        :show-typing-indicator="openedChat.showTypingIndicator"
        :colors="colors"
        :always-scroll-to-bottom="alwaysScrollToBottom"
        :message-styling="messageStyling"
        @scrollToTop="$emit('scrollToTop')"
        @onType="$emit('onType')"
        @edit="$emit('edit', $event)"
        @remove="$emit('remove', $event)"
    >
      <template v-slot:header>
        <slot name="header"> </slot>
      </template>
      <template v-slot:user-avatar="scopedProps">
        <slot name="user-avatar" :user="scopedProps.user" :message="scopedProps.message"> </slot>
      </template>
      <template v-slot:text-message-body="scopedProps">
        <slot
            name="text-message-body"
            :message="scopedProps.message"
            :messageText="scopedProps.messageText"
            :messageColors="scopedProps.messageColors"
            :me="scopedProps.me"
        >
        </slot>
      </template>
      <template v-slot:system-message-body="scopedProps">
        <slot name="system-message-body" :message="scopedProps.message"> </slot>
      </template>
      <template v-slot:text-message-toolbox="scopedProps">
        <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me">
        </slot>
      </template>
    </ChatArea>
  </div>
</template>

<script>
  import store from './../store/'
  import LeftMenu from "./leftMenu/LeftMenu";
  import ChatArea from "./chatArea/ChatArea";
  import CloseIcon from './../assets/close-icon.png'
  import OpenIcon from './../assets/logo-no-bg.svg'
  import {chatTitle} from "../formatters";
  export default {
    name: "ChatMenu",
    props: {
      chats: {
        type: Array,
        default: () => []
      },
      icons: {
        type: Object,
        default: function () {
          return {
            open: {
              img: OpenIcon,
              name: 'default'
            },
            close: {
              img: CloseIcon,
              name: 'default'
            }
          }
        }
      },
      showEmoji: {
        type: Boolean,
        default: false
      },
      showEdition: {
        type: Boolean,
        default: false
      },
      showDeletion: {
        type: Boolean,
        default: false
      },
      showConfirmationDeletion: {
        type: Boolean,
        default: false
      },
      confirmationDeletionMessage: {
        type: String,
        default: 'Do you really want to delete the message?'
      },
      isOpen: {
        type: Boolean,
        required: true
      },
      open: {
        type: Function,
        required: true
      },
      openedChat: {
        type: Object,
        default: null,
      },
      showFile: {
        type: Boolean,
        default: false
      },
      showLauncher: {
        type: Boolean,
        default: true
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      participants: {
        type: Array,
        required: true
      },
      titleImageUrl: {
        type: String,
        default: () => ''
      },
      onMessageWasSent: {
        type: Function,
        required: true
      },
      messageList: {
        type: Array,
        default: () => []
      },
      newMessagesCount: {
        type: Number,
        default: () => 0
      },
      placeholder: {
        type: String,
        default: 'Write a message...'
      },
      showTypingIndicator: {
        type: String,
        default: () => ''
      },
      alwaysScrollToBottom: {
        type: Boolean,
        default: () => true
      },
      messageStyling: {
        type: Boolean,
        default: () => false
      },
      disableUserListToggle: {
        type: Boolean,
        default: false
      },
      colors: {
        type: Object,
        validator: (c) =>
          'header' in c &&
          'bg' in c.header &&
          'text' in c.header &&
          'leftMenu' in c &&
          'bg' in c.leftMenu &&
          'text' in c.leftMenu &&
          'topLeftMenu' in c &&
          'bg' in c.topLeftMenu &&
          'text' in c.topLeftMenu &&
          'launcher' in c &&
          'bg' in c.launcher &&
          'messageList' in c &&
          'bg' in c.messageList &&
          'sentMessage' in c &&
          'bg' in c.sentMessage &&
          'text' in c.sentMessage &&
          'receivedMessage' in c &&
          'bg' in c.receivedMessage &&
          'text' in c.receivedMessage &&
          'userInput' in c &&
          'bg' in c.userInput &&
          'text' in c.userInput &&
          'alert' in c &&
          'bg' in c.alert &&
          'text' in c.alert,
        default: function () {
          return {
            header: {
              bg: '#4e8cff',
              text: '#ffffff'
            },
            leftMenu: {
              bg: '#4e8cff',
              text: '#ffffff'
            },
            topLeftMenu: {
              bg: '#3e70cc',
              text: '#ffffff'
            },
            launcher: {
              bg: '#4e8cff'
            },
            messageList: {
              bg: '#ffffff'
            },
            sentMessage: {
              bg: '#4e8cff',
              text: '#ffffff'
            },
            receivedMessage: {
              bg: '#f4f7f9',
              text: '#ffffff'
            },
            userInput: {
              bg: '#f4f7f9',
              text: '#565867'
            },
            alert: {
              bg: '#ff4646',
              text: '#fff'
            },
          }
        }
      },
    },
    data() {
      return {

      }
    },
    methods: {},
    computed: {
      chatWindowTitle() {
        return chatTitle(this.openedChat)
      }
    },
    watch: {
      $props: {
        deep: true,
        immediate: true,
        handler(props) {
          // TODO: optimize
          for (const prop in props) {
            store.setState(prop, props[prop])
          }
        }
      }
    },
    components: {
      LeftMenu,
      ChatArea
    }
  }
</script>

<style scoped>
  .chat-menu-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    min-height: 0;
  }




</style>