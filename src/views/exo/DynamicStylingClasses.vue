<template>
  <div class="mainDiv">
    <h1 class="my-3">Dynamic Styling (inline)</h1>
    <div class="d-flex justify-content-center">
      <div class="card mx-3 mt-5" v-bind:class="firstCardClass" @click="toggleColor('first')">
        <div class="card-body">
          <p class="card-text">Card title</p>
        </div>
      </div>
      <div class="card mx-3 mt-5" v-bind:class="secondCardClass" @click="toggleColor('second')">
        <div class="card-body">
          <p class="card-text">Card title</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const initialClasses = {
  first: 'bg-aquamarine',
  second: 'bg-palevioletred',
};

const firstCardClass = ref(initialClasses.first);
const secondCardClass = ref(initialClasses.second);

const toggleColor = (card) => {
  if (card === 'first') {
    firstCardClass.value =
      firstCardClass.value === initialClasses.first ? 'bg-red' : initialClasses.first;
  } else if (card === 'second') {
    secondCardClass.value =
      secondCardClass.value === initialClasses.second ? 'bg-green' : initialClasses.second;
  }
};

</script>

<style scoped lang="css">
.mainDiv {
  min-height: 84.8vh !important;
}

.bg-aquamarine {
  background-color: aquamarine;
}

.bg-palevioletred {
  background-color: palevioletred;
}

.bg-red {
  background-color: red;
}

.bg-green {
  background-color: green;
}
</style>