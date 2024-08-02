const express = require("express");
const { createTodo, updateTodo } = require("./modals.js");
const { todo } = require("./database.js");
const app = express();
app.use(express.json());


app.post('/todo' , async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo ;
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you send the wrong input"
        })

        return ;
    }

    await todo.create({
        title:  createPayload.title,
        description : createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo created" 
    })


});

app.get('/gettodo',async (req,res)=>{
    const todos = await todo.find({});
    console.log(todos);
    res.status({
        todos
    })


});

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if(!paresedPayload.success){
        res.status(411).json({
            msg:"data invalid" 
        })
        return ;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed:true
    })

    res.status({
        msg:"todo is marked as completed"
    })

});

 app.listen(3000);
