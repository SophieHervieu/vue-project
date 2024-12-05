<template>
  <div>
    <h1 class="my-3">Le numéro gagnant</h1>
    <div class="d-flex justify-content-center my-5">
      <button @click="incrementOne()" class="bg-success">+1</button>
      <button @click="incrementFive()" class="bg-danger me-3">+5</button>
      <div class="d-flex flex-column">
        <p class="mx-3 pt-2 fs-3 fw-semibold">Le nombre : </p>
        <p class="mx-3 fs-4 fw-semibold">{{ numberToIncrement }}</p>
      </div>
      <p class="mx-3 pt-2 fs-4 fw-semibold">{{ ifNotSeven }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, ref } from 'vue'

let numberToIncrement = ref(0);

function incrementFive() {
  numberToIncrement.value+=5;
}

function incrementOne() {
  numberToIncrement.value++;
}

const ifNotSeven = computed(() => {
  if(numberToIncrement.value < 7) {
    return "Essaie Encore !";
  } else if(numberToIncrement.value === 7) {
    return "Gagné !";
  } else {
    return "Tu as dépassé le nombre mystère";
  }
})

watch(numberToIncrement, (newValue) => {
  if (newValue > 30) {
    setTimeout(() => {
      numberToIncrement.value = 0;
    }, 3000);
  }
})

</script>

<style scoped lang="css">
</style>