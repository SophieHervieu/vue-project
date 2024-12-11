<template>
  <div class="bg-success-subtle p-4 w-50 rounded-3 d-flex flex-column align-items-center justify-content-center">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Nom</label>
        <input v-model="fullName" type="text" class="form-control" id="exampleInputName1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPhoneNumber1" class="form-label">Numéro de téléphone</label>
        <input v-model="phoneNumber" type="text" class="form-control" id="exampleInputPhoneNumber1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Adresse email</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1">
      </div>
      <button type="submit" class="btn btn-success">Enregistrer</button>
    </form>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const fullName = ref('');
const phoneNumber = ref('');
const email = ref('');

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits(['add-friend']);

// Fonction pour gérer la soumission du formulaire
const handleSubmit = () => {
  const friendData = {
    name: fullName.value,
    phone: String(phoneNumber.value),
    email: email.value,
  };

  // Émettre l'événement avec les données du formulaire
  emit('add-friend', friendData);

  // Réinitialiser le formulaire si nécessaire
  fullName.value = '';
  phoneNumber.value = '';
  email.value = '';
};
</script>

<style scoped lang="css">
</style>