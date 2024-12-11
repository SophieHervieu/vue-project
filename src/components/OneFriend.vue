<template>
  <div class="bg-success-subtle p-4 w-50 rounded-3 my-3 d-flex flex-column justify-content-center align-items-center">
    <h3 class="bg-white border border-success rounded-3 w-50">{{ fullName }} ({{ premium }})</h3>
    <div v-if="showDetails" class="border border-success rounded-3 w-50 p-3 mb-3">
      <p>{{ phoneNumber }}</p>
      <p>{{ email }}</p>
      <button @click="togglePremium" class="bg-dark text-light">⭐ Premium ?</button>
    </div>
    <div class="d-flex">
      <button @click="toggleDetails" class="bg-success text-light me-2">
        👁️ {{ showDetails ? 'Masquer les détails' : 'Afficher les détails' }}
      </button>
      <button @click="effacerAmi" class="bg-danger text-light ms-2">🗑️ Supprimer l'ami</button>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

// Déclaration des props
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }, 
  phoneNumber: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }, 
  premium: {
    type: Boolean,
    required: false,
    default: false
  }
});

const emit = defineEmits({
  'mon-event-premium': (id) => {
    if(id) {
      return true;
    } else {
      console.error(`Erreur: l'id n'a pas été spécifié`);
      return false;
    }
  },
  'delete-friend': (id) => {
    if(id) {
      return true;
    } else {
      console.error(`Erreur: l'id n'a pas été spécifié pour la suppression`);
      return false;
    }
  }
});

function togglePremium() {
  emit('mon-event-premium', { id: props.id, premium: !props.premium });
}

// premiumData = !premiumData;

// État local pour gérer la visibilité des détails
const showDetails = ref(false);

// Fonction pour basculer l'état
function toggleDetails() {
  showDetails.value = !showDetails.value;
}


// Fonction pour supprimer un ami
function effacerAmi(id) {
  emit('delete-friend', props.id);
}
</script>

<style scoped lang="css">
</style>