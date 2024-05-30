const { auth } = require("@/services/firebase");
import axios from "axios";
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function useGoogleAuth() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const handleGoogleAuth = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider);
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

  return { handleGoogleAuth };
}

export default useGoogleAuth;
