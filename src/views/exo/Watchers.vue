<template>
  <div class="container">
    <div class="mainDiv mt-5 mb-3">
      <button v-on:click="leNombre++" type="button" class="btn btn-success">+</button>
      <p>{{ leNombre }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);

// Utilisez `watch` pour surveiller les changements de `leNombre`
watch(leNombre, (newValue) => {
  if (newValue === 7) {
    leNombre.value = 0;
  }
});
</script>

<style scoped lang="css">
.container {
  min-height: 80.4vh !important;
}
</style>