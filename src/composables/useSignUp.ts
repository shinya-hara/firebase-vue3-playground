import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const error = ref(null);

const signUp = async (email: string, password: string) => {
  error.value = null;

  try {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error('Could not complete the signUp');
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

export const useSignUp = () => ({ signUp, error });
