<template>
  <div class="contacts-list">
    <slot name="contacts" :chats="contacts">
      <ContactListItem
          v-for="(contact, contactIndex) in contacts"
          :contact="contact"
          :colors="colors"
          @selected-contact="$emit('selected-contact', $event)"
      >
        <template #contact-item="scopedProps">

        </template>
      </ContactListItem>
    </slot>
    <slot name="no-contacts">
      <div v-if="contacts.length === 0" class="no-contacts sc-message--meta">
        No contacts found.
      </div>
    </slot>
  </div>
</template>

<script>
  import ContactListItem from "./ContactListItem";
  export default {
    name: "ContactsList",
    props: {
      contacts: {
        type: Array,
        required: true,
      },
      colors: {
        type: Object,
        required: true
      },
    },
    methods: {

    },
    computed: {
    },
    components: {
      ContactListItem
    }
  }
</script>

<style scoped>
  .contacts-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .sc-message--meta {
    color: white;
    font-size: small;
    font-style: italic;
    margin-bottom: 0px;
    margin-top: 5px;
    opacity: 0.8;
    text-align: center;
  }

  .no-contacts {
    margin-top: 2rem;
  }
</style>