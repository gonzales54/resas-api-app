<template>
  <div>
    <NavBar></NavBar>
    <ListView></ListView>  
    <GraphView></GraphView>
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import ListView from "./components/ListItem.vue";
import GraphView from "./components/GraphItem.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    ListView,
    GraphView,
},
  created(){
    this.$store.dispatch('prefectureAction');
  }
}
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
