<template>
  <div class="top-left-header">
    <div class="top-left-header--text">
      Chat
    </div>
    <div class="top-left-header--tools">
      <div class="tool-button" @click="showContacts">
        &plus;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopLeftHeader",
    props: ["value"],
    methods: {
      showContacts() {
        this.$emit('input', !this.value);
      }
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
  padding: 5px;
  outline: none;
  font-size: large;
  width: 30px;
  height: 30px;
  font-weight: bold;
}

.tool-button:hover {
  background-color: rgba(0, 0, 0, 0.27);
  border-radius: 4px;
  cursor: pointer;
}

</style>