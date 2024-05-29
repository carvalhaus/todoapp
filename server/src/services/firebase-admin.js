var admin = require("firebase-admin");

export function AuthToken(req, res, next) {
  var serviceAccount = require("../firebase-admin.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
