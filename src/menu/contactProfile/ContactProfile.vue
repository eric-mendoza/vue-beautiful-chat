<template>
  <div
      class="contact-profile"
      :class="{'rounded-corners-right': roundedCorners}"
      :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}"
  >
    <!--  Top content  -->
    <TopContactProfile
        :colors="colors"
        :rounded-corners="roundedCorners"
        @close="$emit('close')"
    >
      <template v-slot:top-contact-profile>
        <slot name="top-contact-profile"> </slot>
      </template>
    </TopContactProfile>

    <!--  Contact data  -->
    <div
        class="contact-profile-list"
        :class="{'bottom-right-rounded-corner': roundedCorners}"
    >
      <slot name="contact-profile--body"></slot>
    </div>
  </div>
</template>

<script>
  import TopContactProfile from "./TopContactProfile";
  export default {
    name: "ContactProfile",
    components: {
      TopContactProfile,
    },
    props: {
      colors: {
        type: Object,
        required: true
      },
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>
  .contact-profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    min-width: 260px;
    height: 100%;
    position: relative;
  }

  .contact-profile-list {
    /*display: flex;*/
    /*flex-direction: column;*/
    flex: 1;
    overflow-y: scroll;
  }

  .contact-profile-bottom {
    display: flex;
    padding: 20px;
  }

</style>