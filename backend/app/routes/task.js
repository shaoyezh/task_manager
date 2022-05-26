const Router = require("express");
const { default: mongoose } = require("mongoose");
const router = Router()

router.get('/', async(req,res)=>{
    // console.log(mongoose.connection.readyState)
    const tasks = await req.context.models.Task.find();
    return res.send(tasks);
})

router.post('/', async(req, res)=>{
    const body = req.body
    console.log(body)
    const task = new req.context.models.Task({
        text: body.text,
        day: body.day,
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

router.delete('/', async(req, res)=>{
    const body = req.body 
    console.log(body)
    req.context.models.Task.deleteOne({_id: body._id}, function(err){
        if (err) {
            return err
        }
        else{
            res.send("delete good")
        };
    })
})

router.put('/', async(req, res)=>{
    const body = req.body 
    const task = await req.context.models.Task.findById(body._id)
    task.remainder = !task.remainder
    task.save().then((data)=>{
        return res.json(data)
    }).catch(err=>{
        res.status(500).send({
            message:
                err.message || "Error occured while updating the task"
        })
    })
})
module.exports = router;