import * as admin from "firebase-admin/app";

async function connect() {
  try {
    const serviceAccountPath = "./credentials/firebase-adminsdk.json";
    return await admin.initializeApp({
      credential: admin.cert(serviceAccountPath),
    });
  } catch (error) {}
}

const name = await connect().catch(console.error);
console.log(name);
