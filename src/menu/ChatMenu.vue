<template>
  <div class="chat-menu-container">
    <!--  Left menu  -->
    <LeftMenu
      :colors="colors"
      :chats="chats"
    >

    </LeftMenu>

    
    <!--  Chat area  -->
    <ChatArea
      :colors="colors"
    >

    </ChatArea>
  </div>
</template>

<script>
  import LeftMenu from "./leftMenu/LeftMenu";
  import ChatArea from "./ChatArea";
  export default {
    name: "ChatMenu",
    props: {
      chats: {
        type: Array,
        default: () => []
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
          'text' in c.userInput,
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
              bg: '#4485ec',
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
            }
          }
        }
      },
    },
    data() {
      return {

      }
    },
    methods: {},
    computed: {},
    watch: {},
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
  }




</style>