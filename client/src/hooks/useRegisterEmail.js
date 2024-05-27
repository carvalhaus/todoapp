import { useRouter } from "next/navigation";

const { auth } = require("@/services/firebase");
const { createUserWithEmailAndPassword } = require("firebase/auth");

function UseRegisterEmail() {
  const router = useRouter();

  const handleRegisterEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .then(() => {
        router.push("/app");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    handleRegisterEmail,
  };
}

export default UseRegisterEmail;
