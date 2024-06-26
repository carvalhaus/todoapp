import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();

  const handleLoginEmail = (email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
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

  return { handleLoginEmail };
}

export default useLoginEmail;
