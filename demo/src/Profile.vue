<template>
  <div class="profile--container">
    Profile menu

  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: {

    }
  }
</script>

<style lang="scss" scoped>
  .profile--container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 50px;
    text-align: center;
  }

</style>