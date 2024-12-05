<template>
  <div class="mainDiv bg-light">
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
import { ref } from 'vue'

// Propriétés réactives
const nomLivre = ref('Les mémoires de Steven Seagal');
const isAvailable = ref(false);
const bunchOfNumbers = ref(1234567890);
const array = ref(["du texte", 99]);
const object = ref({name:"COOL", tel:"060503030"});

</script>

<style scoped lang="css">
.mainDiv {
  min-height: 86.9vh !important;
}
</style>