<template>
  <div>
    <h1 class="my-4">List Rendering</h1>
    <div class="d-flex flex-column align-items-start ms-4">
      <h4 class="mb-3">WatchList 🎬 (films à voir)</h4>
      <input v-on:keyup="updateParagraph" v-bind:value="inputContent" type="text" class="form-control mb-3 w-50" id="fname" name="fname" placeholder="Entrez un film">
      <button @click="addMovie" class="bg-primary text-light">Ajouter à votre liste</button>
      <ul class="list-group">
        <li 
          v-for="(oneMovie, index) in movies" 
          :key="index" 
          class="list-group-item"
          @click="removeMovie(index)">
          {{ index + 1 }}- {{ oneMovie }}
        </li>
      </ul>
      <p v-if="movies.length === 0" class="mt-3 alert alert-warning w-50">Votre liste est vide</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

// Valeur de l'input à ajouter dans la zone de texte
const inputContent = ref('');
// Tableau vide à remplir pour effectuer une liste
const movies = ref([]);

// Fonction qui récupère la valeur de l'input pour l'insérer dans la liste
function updateParagraph(event) {
  inputContent.value = event.target.value;
}

// Fonction qui récupère la valeur de l'input et l'insère dans la liste, puis nettoie la zone de l'input après envoi
function addMovie() {
  if (inputContent.value.trim() !== '') {
    movies.value.push(inputContent.value.trim());
    inputContent.value = '';
  }
}

// Fonction qui supprime la valeur ajoutée à l'input en ciblant son index
function removeMovie(index) {
  movies.value.splice(index, 1);
}

</script>

<style scoped lang="css">
</style>