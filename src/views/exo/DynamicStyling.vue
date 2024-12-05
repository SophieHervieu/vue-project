<template>
  <div class="mainDiv">
    <h1 class="my-3">Dynamic Styling (inline)</h1>
    <div class="d-flex justify-content-center">
      <div class="card mx-3 mt-5" :style="{ backgroundColor: firstCardColor }" @click="toggleColor('first')">
        <div class="card-body">
          <p class="card-text">Card title</p>
        </div>
      </div>
      <div class="card mx-3 mt-5" :style="{ backgroundColor: secondCardColor }" @click="toggleColor('second')">
        <div class="card-body">
          <p class="card-text">Card title</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const initialColors = {
  first: 'aquamarine',
  second: 'palevioletred',
};

const firstCardColor = ref(initialColors.first);
const secondCardColor = ref(initialColors.second);

const toggleColor = (card) => {
  if (card === 'first') {
    firstCardColor.value =
      firstCardColor.value === initialColors.first ? 'red' : initialColors.first;
  } else if (card === 'second') {
    secondCardColor.value =
      secondCardColor.value === initialColors.second ? 'green' : initialColors.second;
  }
};

</script>

<style scoped lang="css">
.mainDiv {
  min-height: 84.8vh !important;
}
</style>