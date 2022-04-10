import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/plugins/firebase';

const error = ref(null);

const signIn = async (email: string, password: string) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error('Could not complete the signIn');
    }
    error.value = null;
    console.log(res.user);
    return res;
  } catch (err: any) {
    console.error(err.message);
    error.value = err.message;
    return err;
  }
};

export const useSignIn = () => ({ signIn, error });
