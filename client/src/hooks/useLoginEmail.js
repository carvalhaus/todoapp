import { auth } from "@/services/firebase";
import axios from "axios";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function useLoginEmail() {
  const router = useRouter();

  const handleLoginEmail = (email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        auth.currentUser
          .getIdToken()
          .then((token) => {
            console.log(token);
            return axios.get("http://localhost:3001/api", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          })
          .then(() => {
            router.push("/app");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { handleLoginEmail };
}

export default useLoginEmail;
