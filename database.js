const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb+srv://hritiklearntogrow:AcJVy3BTFC3zb7yW@node.dll1e.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'Demo-01';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Student');

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());