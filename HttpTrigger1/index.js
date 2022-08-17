module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(process.env["TaskDbConnectionString"])

    const triggerTask = { id: "Task" + Date.now(), descr: "Generic task" }

    context.res = {
        // status: 200,  /* Defaults to 200 */
        body: JSON.stringify(triggerTask)
    };
}