const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.TaskDbConnectionString)


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