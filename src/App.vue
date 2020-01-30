<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
import UserList from "./components/UserList";
export default {
  name: "app",

  components: {
    UserList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
