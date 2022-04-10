<template>
  <h1>{{ title }}</h1>
  <nav>
    Router:
    <router-link to="/">/</router-link> |
    <router-link to="/signup">/signup</router-link> |
    <router-link to="/signin">/signin</router-link> |
    <router-link to="/users">/users</router-link> |
    <router-link to="/users/1">/users/:id</router-link>
  </nav>
  <button @click="signOut">Sign Out</button>
  <pre>{{ JSON.stringify(currentUser, null, 4) }}</pre>
  <router-view />
</template>

<script setup lang="ts">
import { onAuthStateChanged } from '@firebase/auth';
import { ref } from 'vue';
import { useSignOut } from './composables/useSignOut';
import { auth } from './plugins/firebase';

const title = import.meta.env.VITE_APP_TITLE;

const { signOut } = useSignOut();

const currentUser = ref();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    currentUser.value = user;
    // ...
  } else {
    // User is signed out
    currentUser.value = null;
  }
});
</script>

<style lang="scss">
#app {
  max-width: 700px;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
