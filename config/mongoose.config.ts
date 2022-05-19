import { MongoClient } from "mongodb";
const mongoURI = process.env.MONGODB_URI;

async function listDatabases(client: MongoClient) {
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList.databases);
}

async function connect() {
  const client = new MongoClient(mongoURI);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
  } finally {
    await client.close();
  }
}

connect().catch(console.error);
