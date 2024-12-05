<template>
  <div>
    <h1 class="mt-3 mb-5">TP : Dynamic Styling</h1>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <input v-on:keyup="updateParagraph" v-bind:value="firstInput" type="text" class="form-control my-2 w-25" id="fname" name="fname"><br>
      <p v-if="showFirstParagraph" :class="{ maClasseHello: firstInput === 'hello', maClasseWorld: firstInput === 'world' }">{{ firstInput }}</p>
      <input v-on:keyup="updateSecondParagraph" v-bind:value="secondInput" type="text" class="form-control my-2 w-25" id="lname" name="lname"><br><br>
      <p :style="{ backgroundColor: secondInput }">{{ secondInput }}</p>
      <button type="submit" @click="showFirstParagraph = !showFirstParagraph" class="btn btn-primary">Afficher 1er titre</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const firstInput = ref('')
const secondInput = ref('')
const showFirstParagraph = ref(false)

function updateParagraph(event) {
  firstInput.value = event.target.value;
}

function updateSecondParagraph(event) {
  secondInput.value = event.target.value;
}

</script>

<style scoped lang="css">
button {
  width: 150px;
}

.maClasseHello {
  background-color: #c9e7b0;
  font-weight: bold;
  font-size: 18px;
  padding: 6px;
  border-radius: 10px;
}

.maClasseWorld {
  background-color: #5c724a;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 6px;
  border-radius: 10px;
}
</style>