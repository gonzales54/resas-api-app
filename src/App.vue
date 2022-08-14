<template>
  <div>
    <NavBar></NavBar>
    <ListView></ListView>  
    <GraphView></GraphView>
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import ListView from "./components/ListView.vue";
import GraphView from "./components/GraphItem.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    ListView,
    GraphView,
  },
})
</script>

<style lang="scss">
@import './assets/reset.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
