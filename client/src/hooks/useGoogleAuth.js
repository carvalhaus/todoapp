const { auth } = require("@/services/firebase");
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

function useGoogleAuth() {
  const router = useRouter();

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .then(() => {
        router.push("/app");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return { handleGoogleAuth, handleLogout };
}

export default useGoogleAuth;
