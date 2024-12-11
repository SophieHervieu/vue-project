<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="my-4">Composant parent Props</h1>
    <OneFriend :fullName="friend1.fullName" :phoneNumber="friend1.phoneNumber" :email="friend1.email" :premium="friend1.premium" />
    <OneFriend :fullName="friend2.fullName" :phoneNumber="friend2.phoneNumber" :email="friend2.email" :premium="friend2.premium" />
    <OneFriend :fullName="friend3.fullName" :phoneNumber="friend3.phoneNumber" :email="friend3.email" :premium="friend3.premium" />
    <OneFriend :fullName="friend4.fullName" :phoneNumber="friend4.phoneNumber" :email="friend4.email" :premium="friend4.premium" />
    <!--<OneFriend :fullName="friend5.fullName" :phoneNumber="friend5.phoneNumber" :email="friend5.email" :premium="friend5.premium" />-->
  </div>
</template>

<script setup lang='js'>
import { defineAsyncComponent } from 'vue'
const OneFriend = defineAsyncComponent(() => '../../components/OneFriend.vue') // Importation du composant enfant

// Données pour le composant
const friend1 = {
  fullName: 'Alice',
  phoneNumber: '123-456-7890',
  email: 'alice@example.com',
  premium: 'abc',
};

const friend2 = {
  fullName: 'Bob',
  phoneNumber: '987-654-3210',
  email: 'bob@example.com',
  premium: 'xyz',
};

const friend3 = {
  fullName: 'Charlie',
  phoneNumber: '555-555-5555',
  email: 'charlie@example.com',
  premium: 'abc',
};

const friend4 = {
  fullName: 'Marie',
  phoneNumber: '777-777-7777',
  email: 'marie@example.com',
  premium: 'xyz',
};

// const friend5 = {
//   phoneNumber: '80-86-8950',
//   email: 'anonymous@example.com',
//   premium: 'azerty'
// }
</script>

<style scoped lang="css">
</style>