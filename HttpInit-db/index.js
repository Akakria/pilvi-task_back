const { MongoClient } = require("mongodb")
const { v4: uuidv4 } = require("uuid")
const client = new MongoClient(process.env.TaskDbConnectionString)


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