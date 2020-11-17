<template>
  <div class="chat-area">
    <Header
        v-if="showHeader"
        :title="title"
        :colors="colors"
        :rounded="false"
        :imageUrl="openedChat.imageUrl"
        @close="$emit('close')"
        @userList="handleUserListToggle"
    >
      <template>
        <slot name="header"> </slot>
      </template>
    </Header>
    <UserList v-if="showUserList" :colors="colors" :participants="openedChat.participants" />
    <MessageList
        v-if="!showUserList"
        :messages="messages"
        :participants="openedChat.participants"
        :show-typing-indicator="openedChat.showTypingIndicator"
        :colors="colors"
        :always-scroll-to-bottom="alwaysScrollToBottom"
        :show-edition="showEdition"
        :show-deletion="showDeletion"
        :show-confirmation-deletion="showConfirmationDeletion"
        :confirmation-deletion-message="confirmationDeletionMessage"
        :message-styling="messageStyling"
        :window-chat="false"
        @scrollToTop="$emit('scrollToTop')"
        @remove="$emit('remove', $event)"
    >
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
    </MessageList>
    <UserInput
        v-if="!showUserList"
        :show-emoji="showEmoji"
        :on-submit="onUserInputSubmit"
        :suggestions="getSuggestions()"
        :show-file="showFile"
        :placeholder="placeholder"
        :colors="colors"
        @onType="$emit('onType')"
        @edit="$emit('edit', $event)"
    />

  </div>
</template>

<script>
  import Header from './../../Header.vue'
  import MessageList from './../../MessageList.vue'
  import UserInput from './../../UserInput.vue'
  import UserList from './../../UserList.vue'

  export default {
    name: "ChatArea",
    props: {
      showEmoji: {
        type: Boolean,
        default: false
      },
      showFile: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        required: true
      },
      onUserInputSubmit: {
        type: Function,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      colors: {
        type: Object,
        required: true
      },
      alwaysScrollToBottom: {
        type: Boolean,
        required: true
      },
      messageStyling: {
        type: Boolean,
        required: true
      },
      showEdition: {
        type: Boolean,
        required: true
      },
      showDeletion: {
        type: Boolean,
        required: true
      },
      showConfirmationDeletion: {
        type: Boolean,
        required: true
      },
      confirmationDeletionMessage: {
        type: String,
        required: true
      },
      openedChat: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        showUserList: false
      }
    },
    computed: {
      messages() {
        return this.openedChat.messageList;
      }
    },
    methods: {
      handleUserListToggle(showUserList) {
        this.showUserList = showUserList
      },
      getSuggestions() {
        return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
      }
    },
    components: {
      Header,
      MessageList,
      UserInput,
      UserList
    },
  }
</script>

<style scoped>
  .chat-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    height: 100%;
    background-color: #fff;
  }
</style>