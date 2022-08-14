<template>
  <main class="mb-4 px-3">
    <ul class="row">
      <ListItem v-for="prefecture in this.$store.getters.prefectures" :key="prefecture.prefCode" :item="prefecture"></ListItem>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListItem from './ListItem.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListItem,
  },
  created(){
    this.$store.dispatch('prefectureAction');
  }
})
</script>

<style lang="scss">
</style>

