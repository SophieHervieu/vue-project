<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="my-4">Composant dynamique</h1>
    <NewFriend @add-friend="ajouterAmi"/>
    <OneFriend 
      v-for="friend in friends" 
      :key="friend.id"
      :id="friend.id"
      :fullName="friend.name"
      :phoneNumber="friend.phone"
      :email="friend.email"
      :premium="friend.premium"
      @mon-event-premium="reactionStatus"
      @delete-friend="supprimerAmi" />
  </div>
</template>

<script setup lang='js'>
import { reactive, ref } from 'vue';
import OneFriend from '../../components/OneFriend.vue';
import NewFriend from '../../components/NewFriend.vue';

const friends = reactive([
  { id: 1, name: 'Alice', phone: '123-456-7890', email: 'alice@example.com', premium: true },
  { id: 2, name: 'Bob', phone: '987-654-3210', email: 'bob@example.com', premium: false },
  { id: 3, name: 'Charlie', phone: '555-555-5555', email: 'charlie@example.com', premium: true },
  { id: 4, name: 'Marie', phone: '777-777-7777', email: 'marie@example.com', premium: false },
]);

// Compteur global pour générer des IDs uniques
let nextId = ref(friends.length + 1);

function reactionStatus(payload) {
  alert(`Je peux réagir dans le parent à l'event "mon-eventpremium" déclenché par le composant enfant !`);
  const friend = friends.find(f => f.id === payload.id);
  if (friend) {
    friend.premium = payload.premium; // Mise à jour réactive
    console.log(friend);
  }
}

function ajouterAmi(friendData) {
  const newFriend = {
    id: nextId.value++, // Utilisation de l'ID unique
    name: friendData.name,
    phone: friendData.phone,
    email: friendData.email,
    premium: false,
  }

  friends.push(newFriend);

  console.log(`Ami ajouté !`)
}

function supprimerAmi(id) {
  const index = friends.findIndex(friend => friend.id === id);
  if(index !== -1) {
    friends.splice(index, 1);
    console.log(`L'ami avec l'ID ${id} a été supprimé`);
  } else {
    console.log(`L'ami qui vous souhaitez supprimer est introuvable`);
  }
}

</script>

<style scoped lang="css">
</style>