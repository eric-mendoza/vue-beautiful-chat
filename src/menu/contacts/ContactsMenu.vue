<template>
  <div
      :class="{ collapsed: !showContactsMenu, 'rounded-corners': roundedCorners}"
      class="contacts-menu"
      ref="contacts"
      tabindex="0"
      @keydown.esc="$emit('close-contacts-menu')"
  >
    <slot name="contacts-menu">
      <div class="contacts-menu--container" >
        <TopContactsMenu
            :colors="colors"
            :rounded-corners="roundedCorners"
            @close-contacts-menu="$emit('close-contacts-menu')"
        >
          <template v-slot:top-contacts-menu>
            <slot name="top-contacts-menu"></slot>
          </template>
          <template v-slot:top-contacts-back>
            <slot name="top-contacts-back"></slot>
          </template>
        </TopContactsMenu>
        <div
            class="contacts-menu--list"
            :class="{'rounded-corners': roundedCorners}"
            :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}"
        >
          <ContactsList
              :contacts="contacts"
              :colors="colors"
              :rounded-corners="roundedCorners"
              @selected-contact="$emit('selected-contact', $event)"
          >
            <template #contact-item="scopedProps">

            </template>
          </ContactsList>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import TopContactsMenu from "./TopContactsMenu";
  import ContactsList from "./ContactsList";
  export default {
    name: "ContactsMenu",
    props: {
      colors: {
        type: Object,
        required: true
      },
      showContactsMenu: {
        type: Boolean,
        default: false,
      },
      contacts: {
        type: Array,
        default: () => []
      },
      roundedCorners: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showContactsMenu() {
        if (this.showContactsMenu) {
          this.$refs.contacts.focus();
        }
      }
    },
    components: {
      ContactsList,
      TopContactsMenu
    }
  }
</script>

<style scoped>
  .contacts-menu {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    transform: translateX(0%);
    transition: 400ms ease;
  }

  .contacts-menu.collapsed {
    transform: translateX(-200%);
  }

  .contacts-menu--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 260px;
    height: 100%;
  }

  .contacts-menu--list {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>