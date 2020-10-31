<template>
  <div class="demo-header" :style="{color: linkColor}">
    <div class="demo-header--title">Vuetiful Chat</div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Object,
      required: true
    },
    chosenColor: {
      type: String,
      required: true
    }
  },
  computed: {
    linkColor() {
      return this.chosenColor === 'dark' ? this.colors.sentMessage.text : this.colors.launcher.bg
    }
  }
}
</script>

<style scoped>
.demo-header {
  width: 100%;
  color: #4e8cff;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  flex: 0 1 auto;
}

.demo-header--title {
  font-size: 24px;
  font-weight: 600;
  margin: 1em;
}

.demo-header--links {
  width: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
}

.demo-header--links a {
  color: #4e8cff;
  text-decoration: none;
  cursor: pointer;
}

.demo-header--links a:hover {
  filter: contrast(15%);
}
</style>
