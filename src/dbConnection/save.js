const { MongoClient } = require("mongodb");


module.exports = async (MongoUrl, dbName, errorObj) => {
  const client = new MongoClient(MongoUrl);
  try {

    await client.connect();
    // console.log("Connected correctly to server ", MongoUrl);
    const db = client.db(dbName);

    // Use the collection "errors"
    const col = db.collection("errors");

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(errorObj);
    // console.log(p);

  }
  catch (err) {
    console.error('[Express-error-handler DB connection error] : ', err);
  }

  finally {
    await client.close();
  }
}




