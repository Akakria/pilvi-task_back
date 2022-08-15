const { MongoClient } = require("mongodb")

const url = "mongodb://pilvi-app-mongodb:qafTav6Deh4Ltz3f4tWHSDtNg5XUH6BqhnicV6kcWjRruDl6TIGMnBRWjCnbu0YFSnpeL8HnDe8o4iHQOan2MA==@pilvi-app-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@pilvi-app-mongodb@"
const client = new MongoClient(url)


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const triggerTask = { id: "Task" + Date.now(), descr: "Generic task" }

    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: JSON.stringify(triggerTask)
    };
}