<template>
  <div
      class="sc-header"
      :class="{'top-rounded': rounded, 'top-right-rounded-corner': roundedCorners}"
      :style="{background: colors.header.bg, color: colors.header.text}"
  >
    <slot>
      <img class="sc-header--img" :src="chatImage" alt="Chat image" />
      <div
          class="sc-header--title"
          :class="{enabled: !disableUserListToggle}"
          @click="!disableUserListToggle ? headerAction() : ''"
      >
        <span class="sc-header--title-text">{{ title }}</span>
        <span v-if="metaMessage" class="sc-header--meta" :class="{italic: someoneIsTyping}">{{metaMessage}}</span>
      </div>
    </slot>
    <div v-if="showCloseButton" class="sc-header--close-button" @click="$emit('close')">
      <img :src="icons.close.img" :alt="icons.close.name" />
    </div>
  </div>
</template>

<script>
import {mapState} from './store/'
import {typingMessage} from './formatters';
import CloseIcon from './assets/close-icon-big.png'
import dictionary from "./assets/dictionary";

export default {
  props: {
    id: {},
    icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: CloseIcon,
            name: 'default'
          }
        }
      }
    },
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    imageUrl: {
      type: String,
      default: null,
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    participants: {
      type: Array,
      required: true
    },
    roundedCorners: {
      type: Boolean,
      default: false
    },
    groupChat: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inUserList: false,
      defaultPhoto: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
    }
  },
  computed: {
    ...mapState(['disableUserListToggle', 'titleImageUrl', 'showCloseButton']),
    typingMessage() {
      let typingUser = this.participants.find(user => user.id === this.showTypingIndicator);
      if (typingUser) return typingUser.name + ' ' + typingMessage();
      else typingMessage(true);
    },
    someoneIsTyping() {
      return this.showTypingIndicator !== '';
    },
    metaMessage() {
      // Is someone typing?
      if (this.someoneIsTyping) return this.typingMessage;

      // Is a one-to-one chat?
      if (!this.groupChat) {
        // Is he online?
        if (this.participants[0].online) return dictionary.online;
      }

      return '';
    },
    chatImage() {
      if (!this.groupChat) return this.participants[0].imageUrl || this.defaultPhoto;

      return this.imageUrl || this.defaultPhoto;
    },
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList;
      this.$emit('userList', this.inUserList)
    },
    headerAction() {
      if (this.groupChat) {
        this.toggleUserList()
      } else {
        this.toggleUserProfile()
      }
    },
    toggleUserProfile() {
      this.$emit('user-profile')
    }
  },
  watch: {
    id() {
      // Close member menu
      this.inUserList = false;
      this.$emit('userList', this.inUserList)
    }
  }
}
</script>

<style scoped>
.sc-header {
  height: 65px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.top-rounded {
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.sc-header--img {
  border-radius: 50%;
  align-self: center;
  padding: 10px;
  height: 36px;
  width: 36px;
  flex: 0 0 auto;
  box-sizing: content-box;

}

.sc-header--title {
  align-self: center;
  padding: 10px;
  flex: 1;
  user-select: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  white-space: nowrap;
}

.sc-header--title-text {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sc-header--title.enabled {
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--title.enabled:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
}

.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button img {
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
}

.sc-header--meta {
  color: rgba(255, 255, 255, 0.70);
  font-size: 14px;
  flex: 1 1 auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.italic {
  font-style: italic;
}

@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}
</style>
