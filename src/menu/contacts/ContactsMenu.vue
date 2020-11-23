<template>
  <div
      :class="{ collapsed: !showContactsMenu }"
      class="contacts-menu"
  >
    <slot name="contacts-menu">
      <div class="contacts-menu--container" >
        <TopContactsMenu :colors="colors" @close-contacts-menu="$emit('close-contacts-menu')">
          <template v-slot:top-contacts-menu>
            <slot name="top-contacts-menu"> </slot>
          </template>
        </TopContactsMenu>
        <div class="contacts-menu--list" :style="{backgroundColor: colors.leftMenu.bg, color: colors.leftMenu.text}">
          <ContactsList
              :contacts="contacts"
              :colors="colors"
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
      }
    },
    components: {
      ContactsList,
      TopContactsMenu
    }
  }
</script>

<style scoped>
  .contacts-menu{
    height: 100%; /* 100% Full-height */
    width: 30%; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    transform: translateX(0%);
    transition: 200ms ease;
  }

  .contacts-menu.collapsed {
    transform: translateX(-100%);
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