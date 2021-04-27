<template>
  <div
      class="contact-profile-top"
      :class="{'top-right-rounded-corner': roundedCorners}"
      :style="{background: colors.topLeftMenu.bg, color: colors.header.text}"
  >
    <div class="top-contact-profile--close-button" @click="$emit('close')">
      <img :src="icons.close.img" :alt="icons.close.name" />
    </div>
    <slot name="top-contact-profile">
      <div class="top-text">
        {{ contactInfo }}
      </div>
    </slot>
  </div>
</template>

<script>
  import CloseIcon from './../../assets/close-icon-big.png'
  import dictionary from "../../assets/dictionary";
  export default {
    name: "TopContactProfile",
    props: {
      colors: {
        type: Object,
        required: true,
      },
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
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      contactInfo() {
        return dictionary.contactInfo;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-contact-profile--close-button {
    width: 40px;
    align-self: center;
    height: 40px;
    margin-right: 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    margin-left: auto;

    &:hover {
      box-shadow: 0 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
    }

    img {
      width: 100%;
      height: 100%;
      padding: 13px;
      box-sizing: border-box;
    }
  }

  .contact-profile > .contact-profile-top > .top-text {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    margin-left: 5px;
    flex: 1;
  }

  .contact-profile-top {
    display: flex;
    height: 65px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }
</style>