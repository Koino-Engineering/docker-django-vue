<template>
  <div id="nav">
    <router-link :to="Routes.HOME">Home</router-link> |
    <router-link :to="Routes.ABOUT">About</router-link> |
    <router-link :to="Routes.ARTICLES">Articles</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Routes from "./router/routes";

export default defineComponent({
    name: "App",
    setup () {
        return {
            Routes,
        };
    },
});
</script>
