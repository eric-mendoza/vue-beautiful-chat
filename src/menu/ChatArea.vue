<template>
  <div class="chat-area">
    Chat area
  </div>
</template>

<script>
  export default {
    name: "ChatArea",
    props: {
      colors: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .chat-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    height: 100%;
    background-color: #fff;
  }
</style>