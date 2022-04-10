import { signOut as _signOut } from 'firebase/auth';
import { auth } from '@/plugins/firebase';

export const useSignOut = () => {
  const signOut = async () => {
    await _signOut(auth);
  };

  return {
    signOut,
  };
};
