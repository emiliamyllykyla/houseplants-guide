if (process.argv.length !== 3) {
  console.log("usage: make-admin UID");
  process.exit();
}

const UID = process.argv[2];

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(UID, { admin: true });
