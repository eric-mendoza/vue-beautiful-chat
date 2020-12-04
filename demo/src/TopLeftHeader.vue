<template>
  <div class="top-left-header">
    <div class="top-left-header--text">
      <img class="profile--img" :src="profileImage" alt="Profile image" @click="openProfile" />
    </div>
    <div class="top-left-header--tools">
      <div class="tool-button" @click="showContacts">
        &plus;
      </div>
      <div class="tool-button" @click="showMenu">
        &vellip;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopLeftHeader",
    props: ["profile", "showContactsMenu", "showOptionsMenu"],
    data() {
      return {
        defaultPhoto: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      }
    },
    methods: {
      showContacts() {
        this.$emit('show-contacts', !this.showContactsMenu);
      },
      showMenu() {
        this.$emit('show-options', !this.showOptionsMenu);
      },
      openProfile() {
        this.$emit('open-profile');
      }
    },
    computed: {
      profileImage() {
        return (this.profile && this.profile.imageUrl) || this.defaultPhoto;
      },
    }
  }
</script>

<style scoped>
.top-left-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
}

.top-left-header--text{
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  flex: 1 1 auto;
}

.top-left-header--tools{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 0.5rem;
}

.tool-button{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #fff;
  background-color: unset;
  padding: 8px;
  outline: none;
  font-size: large;
  width: 40px;
  height: 40px;
  font-weight: bold;
  margin-left: 3px;
}

.tool-button:hover {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
}

.tool-button:active {
  background-color: rgba(0, 0, 0, 0.20);
  border-radius: 50%;
  cursor: pointer;
}

.profile--img {
  border-radius: 50%;
  align-self: center;
  padding: 10px;
  height: 40px;
  width: 40px;
  flex: 0 0 auto;
  box-sizing: content-box;
}
</style>