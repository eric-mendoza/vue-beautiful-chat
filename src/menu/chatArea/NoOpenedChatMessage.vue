<template>
  <div
      class="no-opened-chat-message"
      :class="{'rounded-corners-right': roundedCorners}"
      :style="{background: colors.lightBackground.bg, color: colors.lightBackground.text}"
  >
    <slot>
      <div
          class="message"
          :style="{background: transparentBackground}"
      >
        <ChatIcon
            :height="300"
            :width="300"
            :color="colors.topLeftMenu.text"
        />
      </div>
    </slot>
  </div>
</template>

<script>
  import ChatIcon from "../../icons/ChatIcon";
  export default {
    name: "NoOpenedChatMessage",
    components: {ChatIcon},
    props: {
      roundedCorners: {
        type: Boolean,
        default: false
      },
      colors: {
        type: Object,
        required: true
      },
    },
    computed: {
      transparentBackground() {
        let split = this.colors.topLeftMenu.bg.split('#');
        console.log(split);
        let newColor = '#' + split[1] + '8C';
        console.log(newColor);
        return newColor;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .no-opened-chat-message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .message {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5em;
      height: 400px;
      width: 400px;
      min-height: 400px;
      min-width: 400px;
      max-height: 400px;
      max-width: 400px;
      border-radius: 50%;
    }
  }
</style>