const { auth } = require("@/services/firebase");
import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();
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
            document.cookie = "__session=" + token + ";max-age=3600";
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
        toast({
          variant: "destructive",
          description: error.message,
        });
      });
  };

  return { handleGoogleAuth };
}

export default useGoogleAuth;
