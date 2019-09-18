<template>
  <div class="header">
    <router-link :to="{ path: '/' }">
      <img class="logo" src="../assets/logo-shi.png" alt="SHI" />
    </router-link>
    <Navigator />
  </div>
</template>

<script>
import Navigator from "@/modules/Navigator.vue";

export default {
  name: "Header",
  components: {
    Navigator
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #255f9a;
  min-height: 40px;
  color: black;
}
.logo {
  width: calc(184px / 2 + 5px);
  padding: 5px 0 0 5px;
  float: left;
  cursor: pointer;
}
</style>
