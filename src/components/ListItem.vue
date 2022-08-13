<template>
    <li class="d-flex col-3">
        <div class="d-flex mx-auto">
            <input type="checkbox" class="d-block" @change="setClickData(item.prefCode, item.prefName)" >
            <span>{{ item.prefName }}</span>          
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    item: {
        type: Object, 
        required: true
    }
  },
  methods: {
    setClickData(id: number, name: string) {
      this.$store.dispatch('peoplesAction', {num: id, name: name})
    }
  }
})
</script>