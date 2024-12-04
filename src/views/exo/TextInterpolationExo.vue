<template>
  <div class="bg-primary-subtle">
    <p>{{ nomLivre }}</p>
    <p>{{ isAvailable }}</p>
    <p>{{ bunchOfNumbers }}</p>
    <p>{{ array }}</p>
    <p>{{ array[0] }}</p>
    <p>{{ object }}</p>
    <p>{{ object.name }}</p>
    <p>{{ object['name'] }}</p>
    <p>{{ object.cool }}</p>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

// Propriétés réactives
const nomLivre = ref('Les mémoires de Steven Seagal');
const isAvailable = ref(false);
const bunchOfNumbers = ref(1234567890);
const array = ref(["du texte", 99]);
const object = ref({name:"COOL", tel:"060503030"});

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