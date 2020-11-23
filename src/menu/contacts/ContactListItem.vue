<template>
  <div
      class="contact-menu-item--container"
      @click="selectedContact"
  >
    <div class="overlay"></div>
    <slot name="contact-item" :contact="contact">
      <div class="contact-menu-item">
        <img v-if="contact.imageUrl" class="contact-menu-item--img" :src="contact.imageUrl" alt="" />
        <img v-else class="contact-menu-item--img" :src="defaultPhoto" alt="" />
        <div class="contact-menu-item--body--container" style="">
          <div class="contact-menu-item--body">
            <!--     Chat title and last message time       -->
            <div class="contact-menu-item--body--header">
              <div class="contact-menu-item--name">
                {{ contact.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </slot>
    <hr class="contact-menu-item--hr">
  </div>
</template>

<script>
  export default {
    name: "ContactListItem",
    props: {
      contact: {
        type: Object,
        required: true,
      },
      colors: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        defaultPhoto: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      }
    },
    methods: {
      selectedContact() {
        this.$emit('selected-contact', this.contact);
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .contact-menu-item--container {
    min-height: 75px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .contact-menu-item--container:hover > .overlay {
    width:100%;
    height:100%;
    position:absolute;
    background-color: #000;
    opacity:0.1;
    z-index: 0;
  }

  .contact-menu-item {
    display: flex;
    z-index: 1;
    width: 100%;
    flex: 1;
  }

  .contact-menu-item--body--container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 1em;
    min-width: 0;
  }

  .contact-menu-item--body {
    display: flex;
    flex-direction: column;
    padding: 1em 0 1em 0;
    flex: 1;
    justify-content: center;
  }

  .contact-menu-item--img {
    border-radius: 50%;
    align-self: center;
    padding: 10px;
    height: 30px;
    width: 30px;
    flex: 0 0 auto;
    box-sizing: content-box;
  }

  .contact-menu-item--body--header {
    display: flex;
  }


  .contact-menu-item--name {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1 1 auto;
    flex-basis: 0;
  }


  .contact-menu-item--hr {
    margin: 0 1em 0 0 !important;
    width: 100%;
    color: rgba(255, 255, 255, 0.3);
  }

</style>