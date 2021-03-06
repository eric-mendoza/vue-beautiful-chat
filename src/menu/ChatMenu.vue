<template>
  <div class="chat-menu-container">
    <!--  Left menu  -->
    <LeftMenu
      :colors="colors"
      :chats="chats"
      :opened-chat="openedChat"
      :show-contacts-menu="showContactsMenu"
      :show-new-contact-menu="showNewContactMenu"
      :show-new-group-menu="showNewGroupMenu"
      :show-settings="showSettings"
      :contacts="contacts"
      :show-profile="showProfile"
      :profile="profile"
      :rounded-corners="roundedCorners"
      @opened-chat="handleOpenedChat"
      @close-contacts-menu="$emit('close-contacts-menu')"
      @create-new-chat="$emit('create-new-chat', $event)"
      @close-profile-menu="$emit('close-profile-menu')"
      @close-new-contact-menu="$emit('close-new-contact-menu')"
      @close-new-group-menu="$emit('close-new-group-menu')"
      @close-settings="$emit('close-settings')"
    >
      <template v-slot:top-left-menu>
        <slot name="top-left-menu"> </slot>
      </template>

      <template v-slot:contacts-menu>
        <slot name="contacts-menu"></slot>
      </template>

      <template v-slot:top-contacts-menu>
        <slot name="top-contacts-menu"> </slot>
      </template>
      <template v-slot:top-contacts-back>
        <slot name="top-contacts-back"></slot>
      </template>
      <template v-slot:top-profile-menu>
        <slot name="top-profile-menu"></slot>
      </template>
      <template v-slot:top-profile-back>
        <slot name="top-profile-back"></slot>
      </template>
      <template v-slot:profile-menu>
        <slot name="profile-menu"></slot>
      </template>
      <template v-slot:profile-menu--body>
        <slot name="profile-menu--body"></slot>
      </template>
      <template v-slot:new-contacts-menu>
        <slot name="new-contact-menu"></slot>
      </template>
      <template v-slot:top-new-contacts-menu>
        <slot name="top-new-contact-menu"> </slot>
      </template>
      <template v-slot:top-new-contacts-back>
        <slot name="top-new-contact-back"></slot>
      </template>
      <template v-slot:new-contact-menu--body>
        <slot name="new-contact-menu--body"></slot>
      </template>
      <template v-slot:new-group-menu>
        <slot name="new-group-menu"></slot>
      </template>
      <template v-slot:top-new-group-menu>
        <slot name="top-new-group-menu"> </slot>
      </template>
      <template v-slot:top-new-group-back>
        <slot name="top-new-group-back"></slot>
      </template>
      <template v-slot:new-group-menu--body>
        <slot name="new-group-menu--body"></slot>
      </template>
      <template v-slot:settings>
        <slot name="settings"></slot>
      </template>
      <template v-slot:top-settings>
        <slot name="top-settings"> </slot>
      </template>
      <template v-slot:top-settings-back>
        <slot name="top-settings-back"></slot>
      </template>
      <template v-slot:settings--body>
        <slot name="settings--body"></slot>
      </template>
    </LeftMenu>

    
    <!--  Chat area  -->
    <ChatArea
        v-if="openedChat"
        :opened-chat="openedChat"
        :on-user-input-submit="onMessageWasSent"
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
        :rounded-corners="roundedCorners && !showContactProfile"
        :non-member-placeholder="nonMemberPlaceholder"
        @scrollToTop="$emit('scrollToTop')"
        @onType="$emit('onType')"
        @edit="$emit('edit', $event)"
        @remove="$emit('remove', $event)"
        @user-profile="toggleContactProfile"
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

    <!--  No opened chats  -->
    <NoOpenedChatMessage
        v-if="!openedChat"
        :colors="colors"
        :rounded-corners="roundedCorners && !showContactProfile"
    >
      <slot></slot>
    </NoOpenedChatMessage>

    <ContactProfile
        v-if="showContactProfile"
        :colors="colors"
        :rounded-corners="roundedCorners"
        @close="showContactProfile = false"
    >
      <template v-slot:contact-profile--body>
        <slot name="contact-profile--body"></slot>
      </template>
    </ContactProfile>
  </div>
</template>

<script>
  import store from './../store/'
  import LeftMenu from "./leftMenu/LeftMenu";
  import ChatArea from "./chatArea/ChatArea";
  import CloseIcon from './../assets/close-icon.png'
  import OpenIcon from './../assets/logo-no-bg.svg'
  import {chatTitle} from "../formatters";
  import ContactProfile from "./contactProfile/ContactProfile";
  import NoOpenedChatMessage from "./chatArea/NoOpenedChatMessage";
  export default {
    name: "ChatMenu",
    props: {
      chats: {
        type: Array,
        default: () => []
      },
      contacts: {
        type: Array
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
      showContactsMenu: {
        type: Boolean,
        default: false,
      },
      showNewContactMenu: {
        type: Boolean,
        default: false
      },
      showNewGroupMenu: {
        type: Boolean,
        default: false,
      },
      showSettings: {
        type: Boolean,
        default: false,
      },
      showProfile: {
        type: Boolean,
        default: false,
      },
      profile: {
        type: Object
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
          'text' in c.alert &&
          'lightBackground' in c &&
          'bg' in c.lightBackground &&
          'text' in c.lightBackground,
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
      roundedCorners: {
        type: Boolean,
        default: false
      },
      nonMemberPlaceholder: {
        type: String,
      },
    },
    data() {
      return {
        showContactProfile: false,
      }
    },
    methods: {
      toggleContactProfile() {
        this.showContactProfile = !this.showContactProfile;
      },
      handleOpenedChat(state, chatIndex) {
        this.showContactProfile = false;
        this.$emit('opened-chat', state, chatIndex)
      }
    },
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
      },
      openedChat() {
        // Hide profile menu if chat deleted...
        if (!this.openedChat) {
          this.showContactProfile = false;
        }
      }
    },
    components: {
      NoOpenedChatMessage,
      ContactProfile,
      LeftMenu,
      ChatArea
    }
  }
</script>

<style lang="scss">
  .chat-menu-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    min-height: 0;
  }

  .rounded-corners {
    border-radius: 5px 0 0 5px;
  }

  .rounded-corners-right {
    border-radius: 0 5px 5px 0;
  }

  .top-left-rounded-corner {
    border-radius: 5px 0 0 0;
  }

  .bottom-left-rounded-corner {
    border-radius: 0 0 0 5px;
  }

  .top-right-rounded-corner {
    border-radius: 0 5px 0 0;
  }

  .bottom-right-rounded-corner {
    border-radius: 0 0 5px 0;
  }

  /**
   * Scroll bar CSS
   */
  /* Works on Firefox */
  div.chat-menu-container * {
    scrollbar-width: thin;
    scrollbar-color: rgba(209, 209, 209, 0.6) rgba(0, 0, 0, 0);
  }

  /* Works on Chrome, Edge, and Safari */
  div.chat-menu-container *::-webkit-scrollbar {
    width: 12px;
  }

  div.chat-menu-container *::-webkit-scrollbar-track {
    background: slategray;
  }

  div.chat-menu-container *::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 20px;
    border: 3px solid slategray;
  }
</style>