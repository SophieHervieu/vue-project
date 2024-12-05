<template>
  <div class="mainDiv">
    <h1 class="mt-3 mb-5">V-on et fonctions (bug ?)</h1>
    <div>
      <button @click="increment()" class="bg-success ms-2">+</button>
      <button @click="decrement()" class="bg-danger me-2 mb-3">-</button>
      <p class="mb-3">{{ condition }}</p>
      <p>{{ numberToIncrement }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, ref } from 'vue'

let numberToIncrement = ref(0);

function increment() {
  numberToIncrement.value++;
}

function decrement() {
  numberToIncrement.value--;
}

let userName = ref('');

const condition = computed(() => {
  console.log("Fonction exécutée");
  if(userName.value === '') {
    return "Test";
  } else {
    return "Un autre test";
  }
})

</script>

<style scoped lang="css">
.mainDiv {
  height: 84.8vh;
}
</style>