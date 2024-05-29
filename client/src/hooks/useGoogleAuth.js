const { auth } = require("@/services/firebase");
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function useGoogleAuth() {
  const router = useRouter();

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push("/app");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return { handleGoogleAuth, handleLogout };
}

export default useGoogleAuth;
