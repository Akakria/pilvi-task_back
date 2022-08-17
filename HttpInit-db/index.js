const { MongoClient } = require("mongodb")
const { v4: uuidv4 } = require("uuid")
var connectionString = Environment.GetEnvironmentVariable("TaskDbConnectionString");
//const url = "mongodb://pilvi-app-mongodb:qafTav6Deh4Ltz3f4tWHSDtNg5XUH6BqhnicV6kcWjRruDl6TIGMnBRWjCnbu0YFSnpeL8HnDe8o4iHQOan2MA==@pilvi-app-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@pilvi-app-mongodb@"
const client = new MongoClient(connectionString)


let task = {
    _id: uuidv4(),
    task: "kaljaa"
}


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("PilviTasks")
    const collection = database.collection("Tasks")
    await collection.deleteMany({})
    await collection.insertOne(task)
    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: "init is done"
    };
}