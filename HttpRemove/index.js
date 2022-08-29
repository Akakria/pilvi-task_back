const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.TaskDbConnectionString)


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("PilviTasks")
    const collection = database.collection("Tasks")
    const query = { _id: req.body }

    await collection.deleteOne(query)

    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: "delete ok"
    };
}