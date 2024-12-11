<template>
  <div class="d-flex flex-column">
    <h1 class="my-3">Une simple requête HTTP GET</h1>
    <div class="d-flex flex-column align-items-start ms-5 ps-3 my-3">
      <h3 class="my-3">Liste des Pokémon 🍚 :</h3>
      <ul class="list-group w-25 d-flex flex-column align-items-start border border-primary bg-warning border-4">
        <li 
          v-for="(onePokemon, index) in pokemonList" 
          :key="index"
          class="list-group-item border border-0 bg-warning">
          🍚 {{ onePokemon }}
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column align-items-start ms-5 ps-3 my-3">
      <h3>Météo Toulouse :</h3>
      <p>Température minimum : {{ meteoToulouse.tempMin }}°C ⬇️🥶</p>
      <p>Température maximum : {{ meteoToulouse.tempMax }}°C ⬇️🥶</p>
      <p>Température actuelle : {{ meteoToulouse.tempActuelle }}°C 🌡️</p>
      <p>Conditions météo : {{ meteoToulouse.condition }} ☁️</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Déclarer une variable réactive pour stocker les données
const pokemonList = ref([]);
const meteoToulouse = ref({
  tempActuelle: null,
  tempMin: null,
  tempMax: null,
  condition: null,
});

const fetchPokemonData = async () => {
  try {
    // Effectuer la requête GET
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    // Mettre à jour la variable réactive
    pokemonList.value = data.results.map(pokemon => pokemon.name);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

const fetchMeteoData = async () => {
  try {
    // Effectuer la requête GET
    const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
    const data = await response.json();
    // Mettre à jour la variable réactive
    meteoToulouse.value = {
      tempActuelle: data.current_condition.tmp,
      tempMin: data.fcst_day_0.tmin,
      tempMax: data.fcst_day_0.tmax,
      condition: data.current_condition.condition,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
  }
};

onMounted(() => {
  console.log('A ce moment le composant est monté.');
   // Appeler la fonction pour récupérer les données au montage
   fetchPokemonData();
   fetchMeteoData();
});

// onUpdated(() => {
// });

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});

</script>

<style scoped lang="css">
</style>