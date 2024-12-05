<template>
  <div class="d-flex flex-column">
    <h1 class="mb-3">TP EventBinding</h1>
    <form>
      <input type="text" id="fname" name="fname" @keyup="capterInput($event)"><br>
      <p class="mx-3">{{uneString}}</p>
      <input type="text" id="lname" name="lname" @keyup.esc="capterDeuxiemeInput($event)"><br>
      <p class="mx-3">{{uneDeuxiemeString}}</p>
      <button class="bg-secondary-subtle border-dark-subtle text-dark" @click="displayAlert()">Alerte</button>
    </form>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const uneString = ref('Hello');
const uneDeuxiemeString = ref('World');

function capterInput(event) {
  console.log(event);

  uneString.value = event.target.value;
}

function capterDeuxiemeInput(event) {
  console.log(event);

  uneDeuxiemeString.value = event.target.value;
}

function displayAlert() {
  alert('ALERTE GENERALE');
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