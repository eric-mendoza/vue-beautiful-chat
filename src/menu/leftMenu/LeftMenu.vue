<template>
  <div
      class="left-menu"
      :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}"
  >
    <!--  Top content  -->
    <TopLeftMenu
        :colors="colors"
    >
      <template v-slot:top-left-menu>
        <slot name="top-left-menu"> </slot>
      </template>
    </TopLeftMenu>

    <!--  Multiple existing chats  -->
    <div class="left-menu-list">
      <ChatsList
          :chats="chats"
          :opened-chat="openedChat"
          :colors="colors"
          @opened-chat="$emit('opened-chat', $event)"
      >
        <template #chats="scopedProps">

        </template>
      </ChatsList>
    </div>


    <!--  Bottom section of menu  -->
    <div class="left-menu-bottom"></div>

    <!--  Contacts menu  -->
    <ContactsMenu
        :show-contacts-menu="showContactsMenu"
        :colors="colors"
        :contacts="contacts"
        @close-contacts-menu="$emit('close-contacts-menu')"
        @selected-contact="$emit('create-new-chat', $event)"
    >
      <template v-slot:contacts-menu>
        <slot name="contacts-menu"></slot>
      </template>

      <template v-slot:top-contacts-menu>
        <slot name="top-contacts-menu"> </slot>
      </template>
      <template v-slot:top-contacts-back>
        <slot name="top-contacts-back"></slot>
      </template>
    </ContactsMenu>

    <!--  Profile menu  -->
    <Profile
        :show-profile="showProfile"
        :colors="colors"
        :profile="profile"
        @close-profile-menu="$emit('close-profile-menu')"
    >
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
    </Profile>
  </div>
</template>

<script>
  import TopLeftMenu from "./TopLeftMenu";
  import ChatsList from "./ChatsList";
  import ContactsMenu from "../contacts/ContactsMenu";
  import Profile from "../profile/Profile";
  export default {
    name: "LeftMenu",
    components: {
      Profile,
      TopLeftMenu,
      ChatsList,
      ContactsMenu
    },
    props: {
      colors: {
        type: Object,
        required: true
      },
      chats: {
        type: Array,
        required: true
      },
      openedChat: {
        type: Object,
        default: null,
      },
      showContactsMenu: {
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
      contacts: {
        type: Array
      }
    },
  }
</script>

<style scoped>
  .left-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    min-width: 260px;
    height: 100%;
    position: relative;
  }

  .left-menu-list {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .left-menu-bottom {
    display: flex;
    padding: 20px;
  }

</style>