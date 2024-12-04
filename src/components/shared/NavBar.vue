<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <!-- Partie gauche : Vue Project -->
      <router-link class="nav-link active" aria-current="page" to="/home">
        <a class="navbar-brand text-white">Vue project</a>
      </router-link>

      <!-- Bouton pour navigation mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Partie droite : liens -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- ms-auto pour aligner à droite -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home">
              <a class="nav-link active text-white">Accueil</a>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Leçons
            </a>
            <ul class="dropdown-menu dropdown-menu-end"> <!-- dropdown-menu-end pour aligner à droite -->
              <li><a class="dropdown-item" href="#">Liste des leçons</a></li>
              <li><a class="dropdown-item" href="#">Présentation</a></li>
              <li><a class="dropdown-item" href="#">Introduction Vue</a></li>
              <li><a class="dropdown-item" href="#">Setup Vue</a></li>
              <li><a class="dropdown-item" href="#">Installer et utiliser des librairies</a></li>
              <router-link class="nav-link active" aria-current="page" to="/lesson-interpolation">
                <li><a class="dropdown-item">Text Interpolation</a></li>
              </router-link>
              <li><a class="dropdown-item" href="#">Méthodes et fonctions</a></li>
              <li><a class="dropdown-item" href="#">Directive V-HTML (Inline Templating)</a></li>
              <li><a class="dropdown-item" href="#">Système de composants</a></li>
              <li><a class="dropdown-item" href="#">Création de composants</a></li>
              <li><a class="dropdown-item" href="#">Comp Comm Props</a></li>
              <li><a class="dropdown-item" href="#">Comp Comm Emits</a></li>
              <!-- Reste des items -->
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exercices
            </a>
            <ul class="dropdown-menu dropdown-menu-end"> <!-- Alignement automatique -->
              <li><a class="dropdown-item" href="#">Liste des exercices</a></li>
              <router-link class="nav-link active" aria-current="page" to="/exo-interpolation">
                <li><a class="dropdown-item">Text Interpolation</a></li>
              </router-link>
              <li><a class="dropdown-item" href="#">Méthodes</a></li>
              <li><a class="dropdown-item" href="#">Inline Templating (v-html)</a></li>
              <li><a class="dropdown-item" href="#">Attribute Binding (v-bind)</a></li>
              <li><a class="dropdown-item" href="#">Event Binding (v-on)</a></li>
              <li><a class="dropdown-item" href="#">Two Way Data Binding (v-model)</a></li>
              <li><a class="dropdown-item" href="#">Compûted Proporties</a></li>
              <li><a class="dropdown-item" href="#">Watchers</a></li>
              <li><a class="dropdown-item" href="#">Dynamic Styling</a></li>
              <li><a class="dropdown-item" href="#">Conditional Rendering (v-if)</a></li>
              <li><a class="dropdown-item" href="#">List Rendering (v-for)</a></li>
              <li><a class="dropdown-item" href="#">Props</a></li>
              <li><a class="dropdown-item" href="#">Props ultra Opti (v-bind des props + v-for) + Emit</a></li>
              <li><a class="dropdown-item" href="#">API Fetch</a></li>
              <!-- Reste des items -->
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              TP
            </a>
            <ul class="dropdown-menu dropdown-menu-end"> <!-- Alignement automatique -->
              <li><a class="dropdown-item" href="#">Liste des TP</a></li>
              <li><a class="dropdown-item" href="#">TP-Data Binding</a></li>
              <li><a class="dropdown-item" href="#">TP-Event Binding</a></li>
              <li><a class="dropdown-item" href="#">TP-Reactivity</a></li>
              <li><a class="dropdown-item" href="#">TP-Dynamic Styling</a></li>
              <li><a class="dropdown-item" href="#">TP-Conditional & List Rendering</a></li>
              <li><a class="dropdown-item" href="#">TP-Pokemon Game</a></li>
              <li><a class="dropdown-item" href="#">TP-Component Communication</a></li>
              <!-- Reste des items -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

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