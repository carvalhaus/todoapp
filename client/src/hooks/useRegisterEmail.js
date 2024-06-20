import { useRouter } from "next/navigation";

const { auth } = require("@/services/firebase");
const {
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} = require("firebase/auth");

function UseRegisterEmail() {
  const router = useRouter();

  const handleRegisterEmail = (email, password, username) => {
    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        router.push("/auth/login");
      } catch (error) {
        console.error(error);
      }
    });
  };

  return {
    handleRegisterEmail,
  };
}

export default UseRegisterEmail;
