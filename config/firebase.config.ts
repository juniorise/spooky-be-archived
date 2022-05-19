import { initializeApp, cert } from "firebase-admin/app";

async function connect() {
  try {
    const serviceAccountPath = "./credentials/firebase-adminsdk.json";
    return await initializeApp({
      credential: cert(serviceAccountPath),
    });
  } catch (error) {}
}

async function connectLog() {
  const name = await connect().catch(console.error);
  console.log(name);
}

connectLog();
