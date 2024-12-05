<template>
  <div class="mainDiv">
    <h1 class="mb-5">EventBinding (gérer les événements)</h1>
    <div class="d-flex mx-auto align-items-center justify-content-center">
      <button v-on:click="decrement()" class="bg-danger me-2">-</button>
      <p class="pt-2">le nombre : {{ numberToIncrement }}</p>
      <button @click="increment()" class="bg-success ms-2">+</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let numberToIncrement = ref(0);

function increment() {
  numberToIncrement.value++;
}

function decrement() {
  numberToIncrement.value--;
}

</script>

<style scoped lang="css">
.mainDiv {
  min-height: 86.9vh !important;
}
</style>