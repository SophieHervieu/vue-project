<template>
  <div>
    <h1 class="p-3">Utilisation des méthodes</h1>
    <p class="p-4 border bg-body-tertiary rounded-3">{{ random() }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

function random () {
  let randomNumber = ref(Math.random());

  if (randomNumber.value > 0.5) {
    return "Le Seigneur des Anneaux"
  } else {
    return "Contes et Légendes Oubliés"
  }
}

</script>

<style scoped lang="css">
</style>