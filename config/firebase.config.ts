import { initializeApp, cert } from "firebase-admin/app";
const path = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
const serviceAccount = require(path);

async function connect() {
  try {
    const app = await initializeApp({
      credential: cert(serviceAccount),
    });
    console.log(`FIREBASE CONNECTED: ${app.name}`);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

connect();
