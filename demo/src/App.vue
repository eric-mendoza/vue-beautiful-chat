<template>
  <div class="demo-container" :style="{background: backgroundColor}">
<!--   <TestArea-->
<!--        :chosenColor="chosenColor"-->
<!--        :colors="colors"-->
<!--        :messageStyling="messageStyling"-->
<!--        :onMessage="sendMessage"-->
<!--        :onTyping="handleTyping"-->
<!--    />-->
    <Header :chosen-color="chosenColor" :colors="colors" />
    <chat-menu
        :chats="chats"
        :contacts="contacts"
        :always-scroll-to-bottom="alwaysScrollToBottom"
        :colors="colors"
        :is-open="isChatOpen"
        :message-list="messageList"
        :message-styling="messageStyling"
        :new-messages-count="newMessagesCount"
        :on-message-was-sent="onMessageWasSentMultiple"
        :open="openChat"
        :opened-chat="openedChat"
        :participants="participants"
        :profile="profile"
        :show-launcher="true"
        :show-emoji="true"
        :show-file="true"
        :show-edition="true"
        :show-deletion="true"
        :show-contacts-menu="showContactsMenu"
        :show-new-contact-menu="showNewContactMenu"
        :show-new-group-menu="showNewGroupMenu"
        :show-settings="showSettings"
        :show-confirmation-deletion="true"
        :show-profile="showProfile"
        :confirmation-deletion-message="'Are you sure? (you can customize this message)'"
        :title-image-url="titleImageUrl"
        :disable-user-list-toggle="false"
        :rounded-corners="true"
        @onType="handleOnType"
        @edit="editMessage"
        @remove="removeMessage"
        @opened-chat="openNewChat"
        @close-contacts-menu="closeContactsMenu"
        @close-new-contact-menu="closeNewContactMenu"
        @close-new-group-menu="closeNewGroupMenu"
        @close-profile-menu="closeProfileMenu"
        @close-settings="closeSettings"
        @create-new-chat="createNewChat"
        @scrollToTop="scrolledToTopAction"
    >
      <template v-slot:top-left-menu>
        <TopLeftHeader
            :show-contacts-menu="showContactsMenu"
            :show-options-menu="showOptionsMenu"
            @show-contacts="showContactsMenu = $event"
            @show-options="showOptionsMenu= $event"
            @open-profile="showProfile = true"
            @show-new-contact-menu="showNewContactMenu = true"
            @show-new-group-menu="showNewGroupMenu = true"
            @show-settings="showSettings = true"
        />
      </template>

      <!--  Contacts    -->
      <template v-slot:contacts-menu></template>
      <template v-slot:top-contacts-menu></template>
      <template v-slot:top-contacts-back></template>

      <!--  Profile   -->
      <template v-slot:top-profile-menu></template>
      <template v-slot:top-profile-back></template>
      <template v-slot:profile-menu></template>
      <template v-slot:profile-menu--body>
        <Profile />
      </template>

      <!--  New contact    -->
      <template v-slot:new-contact-menu></template>
      <template v-slot:top-new-contact-menu></template>
      <template v-slot:top-new-contact-back></template>
      <template v-slot:new-contact-menu--body>New contact menu</template>

      <!--  New group    -->
      <template v-slot:new-group-menu></template>
      <template v-slot:top-new-group-menu></template>
      <template v-slot:top-new-group-back></template>
      <template v-slot:new-group-menu--body></template>


      <!--   Settings   -->
      <template v-slot:settings></template>
      <template v-slot:top-settings></template>
      <template v-slot:top-settings-back></template>
      <template v-slot:settings--body>Configuration</template>

      <!--   Contact profile   -->
      <template v-slot:contact-profile--body></template>

      <template v-slot:text-message-toolbox="scopedProps">
        <button
            v-if="!scopedProps.me && scopedProps.message.type === 'text'"
            @click.prevent="like(scopedProps.message.id)"
        >
          👍
        </button>
      </template>
      <template v-slot:text-message-body="scopedProps">
<!--        <p class="sc-message&#45;&#45;text-content" v-html="scopedProps.messageText"></p>-->
<!--        <p-->
<!--            v-if="scopedProps.message.data.meta"-->
<!--            class="sc-message&#45;&#45;meta"-->
<!--            :style="{color: scopedProps.messageColors.color}"-->
<!--        >-->
<!--          {{ scopedProps.message.data.meta }}-->
<!--        </p>-->
<!--        <p-->
<!--            v-if="scopedProps.message.isEdited || scopedProps.message.liked"-->
<!--            class="sc-message&#45;&#45;edited"-->
<!--        >-->
<!--          <template v-if="scopedProps.message.isEdited">✎</template>-->
<!--          <template v-if="scopedProps.message.liked">👍</template>-->
<!--        </p>-->
      </template>
      <template v-slot:system-message-body="{message}"> [System]: {{ message.text }} </template>
    </chat-menu>

    <div class="">
<!--      <beautiful-chat-->
<!--          :always-scroll-to-bottom="alwaysScrollToBottom"-->
<!--          :close="closeChat"-->
<!--          :colors="colors"-->
<!--          :is-open="isChatOpen"-->
<!--          :message-list="messageList"-->
<!--          :message-styling="messageStyling"-->
<!--          :new-messages-count="newMessagesCount"-->
<!--          :on-message-was-sent="onMessageWasSent"-->
<!--          :open="openChat"-->
<!--          :participants="participants"-->
<!--          :show-close-button="true"-->
<!--          :show-launcher="true"-->
<!--          :show-emoji="true"-->
<!--          :show-file="true"-->
<!--          :show-typing-indicator="showTypingIndicator"-->
<!--          :show-edition="true"-->
<!--          :show-deletion="true"-->
<!--          :show-confirmation-deletion="true"-->
<!--          :confirmation-deletion-message="'Are you sure? (you can customize this message)'"-->
<!--          :title-image-url="titleImageUrl"-->
<!--          :disable-user-list-toggle="false"-->
<!--          @onType="handleOnType"-->
<!--          @edit="editMessage"-->
<!--          @remove="removeMessage"-->
<!--      >-->
<!--        <template v-slot:text-message-toolbox="scopedProps">-->
<!--          <button-->
<!--              v-if="!scopedProps.me && scopedProps.message.type === 'text'"-->
<!--              @click.prevent="like(scopedProps.message.id)"-->
<!--          >-->
<!--            👍-->
<!--          </button>-->
<!--        </template>-->
<!--        <template v-slot:text-message-body="scopedProps">-->
<!--          <p class="sc-message&#45;&#45;text-content" v-html="scopedProps.messageText"></p>-->
<!--          <p-->
<!--              v-if="scopedProps.message.data.meta"-->
<!--              class="sc-message&#45;&#45;meta"-->
<!--              :style="{color: scopedProps.messageColors.color}"-->
<!--          >-->
<!--            {{ scopedProps.message.data.meta }}-->
<!--          </p>-->
<!--          <p-->
<!--              v-if="scopedProps.message.isEdited || scopedProps.message.liked"-->
<!--              class="sc-message&#45;&#45;edited"-->
<!--          >-->
<!--            <template v-if="scopedProps.message.isEdited">✎</template>-->
<!--            <template v-if="scopedProps.message.liked">👍</template>-->
<!--          </p>-->
<!--        </template>-->
<!--        <template v-slot:system-message-body="{message}"> [System]: {{ message.text }} </template>-->
<!--      </beautiful-chat>-->
    </div>

  </div>
</template>

<script>
import messageHistory from './messageHistory'
import chatParticipants from './chatProfiles'
import Header from './Header.vue'
import Footer from './Footer.vue'
import TestArea from './TestArea.vue'
import availableColors from './colors'
import TopLeftHeader from "./TopLeftHeader";
import Profile from "./Profile";

export default {
  name: 'App',
  components: {
    Profile,
    Header,
    TestArea,
    TopLeftHeader
  },
  data() {
    return {
      participants: chatParticipants[0],
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: messageHistory[0],
      newMessagesCount: 3,
      isChatOpen: false,
      showContactsMenu: false,
      showNewContactMenu: false,
      showNewGroupMenu: false,
      showSettings: false,
      showTypingIndicator: '',
      colors: null,
      availableColors,
      chosenColor: null,
      alwaysScrollToBottom: true,
      messageStyling: true,
      userIsTyping: false,
      openedChat: null,
      contacts: chatParticipants[3],
      showOptionsMenu: false,
      showProfile: false,
      profile: {
        imageUrl: ''
      },
      chats: [
        {
          datetime: '2020-11-20 09:10:47',
          id: 2,
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
          messageList: messageHistory[0],
          newMessagesCount: 3,
          participants: chatParticipants[0],
          showTypingIndicator: '',
          title: '',
        },
        {
          datetime: '2020-11-18 16:28:47',
          id: 3,
          imageUrl: 'https://avatars2.githubusercontent.com/u/14318275',
          messageList: messageHistory[1],
          newMessagesCount: 1,
          participants: chatParticipants[1],
          showTypingIndicator: 'ericmendoza',
          title: 'Work and other people I dont know',
        },
        {
          datetime: '2020-11-17 00:28:47',
          id: 1,
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4',
          messageList: messageHistory[2],
          newMessagesCount: 10,
          participants: chatParticipants[2],
          showTypingIndicator: '',
          title: '',
        },
      ]
    }
  },
  computed: {
    linkColor() {
      return this.chosenColor === 'dark' ? this.colors.sentMessage.text : this.colors.launcher.bg
    },
    backgroundColor() {
      return this.chosenColor === 'dark' ? this.colors.messageList.bg : '#fff'
    }
  },
  created() {
    this.setColor('blue')
  },
  mounted() {
    this.messageList.forEach((x) => (x.liked = false))
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({
          author: 'support',
          type: 'text',
          id: Math.random(),
          data: {text}
        })
      }
    },
    handleTyping(text) {
      this.showTypingIndicator =
        text.length > 0 ? this.participants[this.participants.length - 1].id : ''
    },
    onMessageWasSent(message) {
      this.messageList = [...this.messageList, Object.assign({}, message, {id: Math.random()})]
    },
    onMessageWasSentMultiple(message) {
      this.openedChat.messageList = [...this.openedChat.messageList, Object.assign({}, message, {id: Math.random()})]
    },
    openChat() {
      this.isChatOpen = true;
      this.newMessagesCount = 0
    },
    openNewChat(chat, chatIndex) {
      this.openedChat = chat;
      this.openedChat.newMessagesCount = 0
    },
    closeChat() {
      this.isChatOpen = false
    },
    closeContactsMenu() {
      console.debug('%c Closing contacts menu.', 'background: #228B22; color: #ffffff');
      this.showContactsMenu = false;
    },
    closeNewContactMenu() {
      console.debug('%c Closing new contact menu.', 'background: #228B22; color: #ffffff');
      this.showNewContactMenu = false;
    },
    closeNewGroupMenu() {
      console.debug('%c Closing new group menu.', 'background: #228B22; color: #ffffff');
      this.showNewGroupMenu = false;
    },
    closeSettings() {
      this.showSettings = false;
    },
    closeProfileMenu() {
      console.debug('%c Closing profile menu.', 'background: #228B22; color: #ffffff');
      this.showProfile = false;
    },
    createNewChat(contact) {
      console.debug('%c Creating new chat with: ' + contact.name, 'background: #228B22; color: #ffffff');
      this.chats.push(
        {
          datetime: this.newFormattedDate(),
          id: this.chats.length + 1,
          imageUrl: contact.imageUrl,
          messageList: [],
          newMessagesCount: 0,
          participants: [contact],
          showTypingIndicator: '',
          title: '',
        },
      );
      this.showContactsMenu = false;
    },
    setColor(color) {
      this.colors = this.availableColors[color];
      this.chosenColor = color
    },
    showStylingInfo() {
      this.$modal.show('dialog', {
        title: 'Info',
        text:
          'You can use *word* to <strong>boldify</strong>, /word/ to <em>emphasize</em>, _word_ to <u>underline</u>, `code` to <code>write = code;</code>, ~this~ to <del>delete</del> and ^sup^ or ¡sub¡ to write <sup>sup</sup> and <sub>sub</sub>'
      })
    },
    messageStylingToggled(e) {
      this.messageStyling = e.target.checked
    },
    handleOnType() {
      console.debug('%c User is typing...', 'background: #228B22; color: #ffffff');
      this.$root.$emit('onType')
      this.userIsTyping = true
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    },
    removeMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id)
      m.type = 'system'
      m.data.text = 'This message has been removed'
    },
    like(id) {
      const m = this.messageList.findIndex((m) => m.id === id)
      var msg = this.messageList[m]
      msg.liked = !msg.liked
      this.$set(this.messageList, m, msg)
    },
    newFormattedDate() {
      return (new Date(Date.now() - new Date().getTimezoneOffset()*60*1000)).toISOString().slice(0, 19).replace(/-/g, "-").replace("T", " ");
    },
    changePhoto() {
      if (this.contacts[3].imageUrl) {
        this.contacts[3].imageUrl = '';
        return;
      }
      this.contacts[3].imageUrl = 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png';
    },
    scrolledToTopAction() {
      console.log('%c Just scrolled to top...', 'background: #222; color: #bada55');
      // TEST: Add new messages
      this.openedChat.messageList = [...messageHistory[0], ...this.openedChat.messageList]
    }
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

* {
  font-family: Avenir Next, Helvetica Neue, Helvetica, sans-serif;
}

.demo-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  min-height: 30vh;
}

.demo-description {
  max-width: 500px;
}

.demo-description img {
  max-width: 500px;
}

.demo-test-area {
  width: 300px;
  box-sizing: border-box;
}

.demo-test-area--text {
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0px;
  resize: none;
  font-family: Avenir Next, Helvetica Neue, Helvetica, sans-serif;
  background: #fafbfc;
  color: #8da2b5;
  border: 1px solid #dde5ed;
  font-size: 16px;
  padding: 16px 15px 14px;
  margin: 0;
  border-radius: 6px;
  outline: none;
  height: 150px;
  margin-bottom: 10px;
}

.demo-monster-img {
  width: 400px;
  display: block;
  margin: 60px auto;
}

.text-center {
  text-align: center;
}

.colors a {
  color: #fff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 10px;
}

.toggle a {
  text-decoration: none;
}

.messageStyling {
  font-size: small;
}
</style>
