const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is missing in .env');
  }

  const dataPath = path.join(__dirname, '..', 'sampleContacts.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const contacts = JSON.parse(raw);

  if (!Array.isArray(contacts) || contacts.length === 0) {
    throw new Error('sampleContacts.json must contain a non-empty JSON array');
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('contacts');

    const result = await collection.insertMany(contacts, { ordered: true });
    console.log(`Imported ${result.insertedCount} contacts into ${db.databaseName}.contacts`);
  } finally {
    await client.close();
  }
}

run().catch((error) => {
  console.error('Import failed:', error.message);
  process.exit(1);
});
