<template>
  <div>
    <h1 class="my-3">EventBinding (gérer les événements)</h1>
    <div class="d-flex mx-auto align-items-center justify-content-center">
      <button v-on:click="decrement()" class="bg-danger me-2">-</button>
      <p>le nombre : {{ numberToIncrement }}</p>
      <button @click="increment()" class="bg-success ms-2">+</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

let numberToIncrement = ref(0);

function increment() {
  numberToIncrement.value++;
}

function decrement() {
  numberToIncrement.value--;
}

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>