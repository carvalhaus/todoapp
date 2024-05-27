const { auth } = require("@/services/firebase");
const { createUserWithEmailAndPassword } = require("firebase/auth");

function UseRegisterEmail() {
  const handleRegisterEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
