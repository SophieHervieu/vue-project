<template>
  <div class="container py-2">
    <h1 class="my-5">Liste des leçons</h1>
    <ul class="list-group">
      <li 
        v-for="(oneDetail, index) in details" 
        :key="index" 
        class="list-group-item d-flex justify-content-between align-items-center bg-light">
        <span>{{ oneDetail.title }} {{ oneDetail.id }}</span>
        <router-link 
          :to="{ name: 'Details', params: { id: oneDetail.id } }"
          class="btn btn-success"
        >
          Voir les détails
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const details = ref([
  { id: 1, title: 'Leçon ' },
  { id: 2, title: 'Leçon ' },
  { id: 3, title: 'Leçon ' },
  { id: 4, title: 'Leçon ' },
]);

</script>

<style scoped lang="css">
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
</style>