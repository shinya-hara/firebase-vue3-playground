<template>
  <div>
    <h1>Sign In</h1>

    <form @submit.prevent="signIn">
      <input v-model="credential.email" type="email" placeholder="email" />
      <input
        v-model="credential.password"
        type="password"
        placeholder="password"
      />
      <button type="submit">Sign In</button>
    </form>

    <button @click="googleSignIn">Google Sign In</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useSignIn } from '@/composables/useSignIn';
import { useGoogleAuthProvider } from '@/composables/useGoogleAuthProvider';

const { signIn: _signIn } = useSignIn();
const { authGoogleSignIn } = useGoogleAuthProvider();

const credential = reactive({
  email: '',
  password: '',
});

const signIn = async () => {
  await _signIn(credential.email, credential.password);
};

const googleSignIn = () => {
  authGoogleSignIn();
};
</script>
