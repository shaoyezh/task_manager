const Router = require("express");
const { default: mongoose } = require("mongoose");
const router = Router()

router.get('/', async(req,res)=>{
    console.log(mongoose.connection.readyState)
    const tasks = await req.context.models.Task.find();
    return res.send(tasks);
})

router.post('/create', async(req, res)=>{
    const body = req.body

    console.log(req)
    const task = new req.context.models.Task({
        name: body.name,
        date: body.date,
        remainder: body.remainder
    })
    task.save().then(data=>{
        return res.json(data)
    }).catch(err=>{
        res.status(500).send({
            message:
                err.message || "Error occured while creating the new task"
        })
    })

})

module.exports = router;