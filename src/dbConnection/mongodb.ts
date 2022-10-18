import { MongoClient } from 'mongodb';

const save = async (MongoUrl: string, dbName: string, errorObj: object & { createdAt?: Date }) => {
  const client = new MongoClient(MongoUrl);
  try {
    await client.connect();
    console.log('Connected correctly to server ', MongoUrl);
    const db = client.db(dbName);

    // Use the collection "errors"
    const col = db.collection('errors');

    // Insert a single document, wait for promise so we can read it back
    errorObj.createdAt = new Date();
    await col.insertOne(errorObj);
  } catch (err) {
    console.error('[Express-error-handler DB connection error] : ', err);
  } finally {
    await client.close();
  }
};

export default save;
