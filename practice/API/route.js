var express = require('express');
var route = express.Router();
var stud = require('./Model/inventory.js')


route.get('/inventories',async(req,res)=>{
    var istud = await stud.find();
    res.send(istud);
})


route.delete("/inventories/:id",async(req,res)=>{
        await stud.deleteOne({_id:req.params.id},(err,msg)=>{
            if(err)
            {
                res.status(500).json({"err":err})
            }
            else
            {
                res.status(200).json({"message":msg})
            }
        });
    });

module.exports = route;

//insert data
route.post('/inventories',async(req,res)=>{
    const isave = new stud({
        item:req.body.item,
        quantity:req.body.quantity,
        name:req.body.name,
        fee:req.body.fee

    })
    console.log(isave);
    await isave.save((err,msg)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
            res.send(msg);
        }
    });
})

//update
route.patch("/inventories/:id",async(req,res)=>{
    const iupdate = await stud.findOne({_id:req.params.id});
    iupdate.item = req.body.item;
    iupdate.quantity = req.body.quantity;
    iupdate.name = req.body.name;
    iupdate.fee = req.body.fee;

    await iupdate.save((err,msg)=>{
        if(err)
        {
            res.status(500).json({"err":err})
        }
        else
        {
            res.status(200).json({"msg":msg})
        }
    })
})
