<template>
  <div>
    <h1>Page Détails</h1>
    <div class="card bg-light" style="width: 19rem;">
      <div class="card-body">
        <h5 class="card-title">Détails de la leçon {{ id }}</h5>
        <p class="card-text">Courte description de la leçon {{ id }}.</p>
        <router-link 
          class="btn btn-success" 
          to="/lesson-router"
        >
          Retour à la liste
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = computed(() => route.params.id);

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

</script>

<style scoped lang="css">
.card {
  margin: 20px auto;
}
</style>