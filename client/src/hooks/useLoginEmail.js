import { auth } from "@/services/firebase";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function useLoginEmail() {
  const router = useRouter();

  const handleLoginEmail = (email, password) => {
    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        router.push("/app");
      } catch (error) {
        console.error(error);
      }
    });
  };

  return { handleLoginEmail };
}

export default useLoginEmail;
