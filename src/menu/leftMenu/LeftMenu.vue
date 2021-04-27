<template>
  <div
      class="left-menu"
      :class="{'rounded-corners': roundedCorners}"
      :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}"
  >
    <!--  Top content  -->
    <TopLeftMenu
        :colors="colors"
        :rounded-corners="roundedCorners"
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
          @opened-chat="handleOpenedChat"
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
        :rounded-corners="roundedCorners"
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
        :rounded-corners="roundedCorners"
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

    <!--  New Contact menu  -->
    <NewContactMenu
        :show="showNewContactMenu"
        :colors="colors"
        :rounded-corners="roundedCorners"
        @close-new-contact-menu="$emit('close-new-contact-menu')"
    >
      <template v-slot:new-contacts-menu>
        <slot name="new-contacts-menu"></slot>
      </template>
      <template v-slot:top-new-contacts-menu>
        <slot name="top-new-contacts-menu"> </slot>
      </template>
      <template v-slot:top-new-contacts-back>
        <slot name="top-new-contacts-back"></slot>
      </template>
      <template v-slot:new-contact-menu--body>
        <slot name="new-contact-menu--body"></slot>
      </template>
    </NewContactMenu>

    <!--  New group menu  -->
    <NewGroupMenu
        :show="showNewGroupMenu"
        :colors="colors"
        :rounded-corners="roundedCorners"
        @close-new-group-menu="$emit('close-new-group-menu')"
    >
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
    </NewGroupMenu>

    <!--  Settings  -->
    <Settings
        :show-settings="showSettings"
        :colors="colors"
        :rounded-corners="roundedCorners"
        @close-settings="$emit('close-settings')"
    >
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
    </Settings>
  </div>
</template>

<script>
  import TopLeftMenu from "./TopLeftMenu";
  import ChatsList from "./ChatsList";
  import ContactsMenu from "../contacts/ContactsMenu";
  import Profile from "../profile/Profile";
  import NewContactMenu from "../newContactMenu/NewContactMenu";
  import NewGroupMenu from "../newGroup/NewGroupMenu";
  import Settings from "../settings/Settings";
  export default {
    name: "LeftMenu",
    components: {
      Settings,
      NewGroupMenu,
      NewContactMenu,
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
      showNewContactMenu: {
        type: Boolean,
        default: false,
      },
      showNewGroupMenu: {
        type: Boolean,
        default: false,
      },
      showSettings: {
        type: Boolean,
        default: false,
      },
      profile: {
        type: Object
      },
      contacts: {
        type: Array
      },
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleOpenedChat(state, chatIndex) {
        this.$emit('opened-chat', state, chatIndex);
      }
    }
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