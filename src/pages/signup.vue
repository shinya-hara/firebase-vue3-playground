<template>
  <div>
    <h1>Sign Up</h1>

    <form @submit.prevent="signUp(credential.email, credential.password)">
      <input v-model="credential.email" type="email" placeholder="email" />
      <input
        v-model="credential.password"
        type="password"
        placeholder="password"
      />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useSignUp } from '@/composables/useSignUp';

const { signUp } = useSignUp();

const credential = reactive({
  email: '',
  password: '',
});
</script>
