const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.TaskDbConnectionString)


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("PilviTasks")
    const collection = database.collection("Tasks")
    const filter = { _id: req.body.id }
    const updateDoc = {
        $set: {
            descr: req.body.descr
        }
    }

    await collection.updateOne(filter, updateDoc)

    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: "delete ok"
    };
}