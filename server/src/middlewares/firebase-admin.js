const { getAuth } = require("firebase-admin/auth");
let firebaseApp = null;

module.exports = (req, res, next) => {
  const admin = require("firebase-admin");
  const serviceAccount = require("../../firebase-admin.json");

  if (!firebaseApp)
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

  const token = req.headers.authorization;
  const parts = token.split(" ");

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Token has not been provided!",
    });
  }

  if (parts.length !== 2) {
    return res.status(401).json({
      error: true,
      message: "Invalid token type!",
    });
  }

  getAuth()
    .verifyIdToken(parts[1])
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid);
      next();
    })
    .catch((error) => {
      res.send(error);
    });
};
