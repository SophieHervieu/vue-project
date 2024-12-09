<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <!-- Partie gauche : Vue Project -->
      <router-link class="nav-link active text-white" aria-current="page" to="/home">Vue project</router-link>

      <!-- Bouton pour navigation mobile 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <!-- Partie droite : liens -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- ms-auto pour aligner à droite -->
          <li class="nav-item">
            <router-link class="nav-link active text-white" aria-current="page" to="/home">Accueil</router-link>
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
              <li><router-link class="nav-link active" aria-current="page" to="/lesson-interpolation">Text Interpolation</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/lesson-methods">Méthodes et fonctions</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/lesson-inline-templating">Directive V-HTML (Inline Templating)</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/lesson-list-rendering">List Rendering</router-link></li>
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
              <li><router-link class="nav-link active" aria-current="page" to="/exo-interpolation">Text Interpolation</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-method-execution">Méthodes</router-link></li>
              <li><a class="dropdown-item" href="#">Inline Templating (v-html)</a></li>
              <li><a class="dropdown-item" href="#">Attribute Binding (v-bind)</a></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-event-binding">Event Binding (v-on)</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-two-way-data-binding">Two Way Data Binding (v-model)</router-link></li>
              <li><a class="dropdown-item" href="#">Computed Proporties</a></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-watchers">Watchers</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-dynamic-styling">Dynamic Styling</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-dynamic-styling-class">Dynamic Styling (classes)</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-conditional-rendering">Conditional Rendering (v-if)</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/exo-list-rendering">List Rendering (v-for)</router-link></li>
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
              <li><router-link class="nav-link active" aria-current="page" to="/tp-data-binding">TP-Data Binding</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/tp-event-binding">TP-Event Binding</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/tp-reactivity">TP-Reactivity</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/tp-dynamic-styling">TP-Dynamic Styling</router-link></li>
              <li><router-link class="nav-link active" aria-current="page" to="/tp-list-rendering">TP-Conditional & List Rendering</router-link></li>
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