const { MongoClient } = require("mongodb")

var connectionString = Environment.GetEnvironmentVariable("TaskDbConnectionString");

const url = connectionString
const client = new MongoClient(url)


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("PilviTasks")
    const collection = database.collection("Tasks")

    await collection.insertOne(req.body)

    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: "create ok"
    };
}