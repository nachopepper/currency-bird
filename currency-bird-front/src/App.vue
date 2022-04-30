<template>
  <div id="app">
    <div>
      <router-link to="/">Crear link referido</router-link>
      <br>
      <br>
      <router-link to="/gestion">Ver tabla referidos</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
