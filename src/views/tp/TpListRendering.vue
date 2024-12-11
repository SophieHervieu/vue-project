<template>
  <div>
    <h1 class="my-4">TP: Conditional/List Rendering</h1>
    <div class="d-flex flex-column align-items-start ms-4">
      <h4 class="mb-3">La liste des courses 🛒🛍️</h4>
      <input v-on:keyup="updateParagraph" v-bind:value="inputContent" type="text" class="form-control mb-3 w-50" id="fname" name="fname">
      <button @click="addGroceries" class="bg-success border-success text-light mb-5">Ajouter à votre liste de courses</button>
      <ul v-if="isListVisible" class="list-group">
        <li 
          v-for="(oneProduct, index) in groceries" 
          :key="index" 
          class="list-group-item d-flex"
          @click="removeGroceries(index)">
          {{ index + 1 }}- {{ oneProduct }}
        </li>
      </ul>
      <p v-if="groceries.length === 0" class="mt-3 alert alert-warning w-50">Votre liste est vide</p>
      <button @click="toggleListVisibility" class="bg-info border-info mt-4">{{ isListVisible ? 'Masquer liste' : 'Afficher liste' }}</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

// Valeur de l'input à ajouter dans la zone de texte
const inputContent = ref('');
// Tableau vide à remplir pour effectuer une liste
const groceries = ref([]);
// Variable à switcher entre true et false
const isListVisible = ref(true);

// Fonction qui récupère la valeur de l'input pour l'insérer dans la liste
function updateParagraph(event) {
  inputContent.value = event.target.value;
}

// Fonction qui récupère la valeur de l'input et l'insère dans la liste, puis nettoie la zone de l'input après envoi
function addGroceries() {
  if (inputContent.value.trim() !== '') {
    groceries.value.push(inputContent.value.trim());
    inputContent.value = '';
  }
}

// Fonction qui supprime la valeur ajoutée à l'input en ciblant son index
function removeGroceries(index) {
  groceries.value.splice(index, 1);
}

// Fonction pour basculer la visibilité de la liste
function toggleListVisibility() {
  isListVisible.value = !isListVisible.value;
}

</script>

<style scoped lang="css">
</style>