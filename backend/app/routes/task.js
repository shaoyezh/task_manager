const Router = require("express")
const router = Router()

router.get('/', async(req,res)=>{
    // const testTask =  await req.context.models.Task.create({
    //     task:"test",
    //     date: "2022-05-07",
    //     remainder: true
    // })
    const testTask =  new req.context.models.Task({
        task:"test",
        date: "2022-05-07",
        remainder: true
    })
    await testTask.save()
    const tasks = await req.context.models.Task.find();
    console.log("tasks")
    return res.send(tasks);
})

module.exports = router;