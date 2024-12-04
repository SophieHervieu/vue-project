<template>
  <div>
    <h1 class="p-3">TP DataBinding - Profile User</h1>
    <div class="border rounded-3 bg-body-tertiary mx-auto d-flex flex-column align-items-center justify-content-center w-25">
      <img v-bind:src="image" class="card-img my-4">
      <input type="text" id="fullName" name="fullName" v-bind:placeholder="fullName">
      <p class="mt-3">{{ age }} ans</p>
      <p>Nombre fétiche : {{ favoriteNumber }}</p>
      <p>Age + 10 : {{ agePlusTen() }} ans</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const fullName = ref('Dr. Mario');
const image = ref('https://thispersondoesnotexist.com/');
const age = ref(45);
const favoriteNumber = ref(Math.random());

function agePlusTen() {
  let result = age.value + 10;
  return result;
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
img {
  width: 200px;
  height: 200px;
  border-radius: 150px;
}

#fullName {
  width: 200px;
  text-align: center
}
</style>