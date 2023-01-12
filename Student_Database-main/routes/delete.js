const express = require('express');
const router = express.Router();
const Student = require('../model/student');

//shows a particular post using request query
router.delete("/", async (req,res)=>{
   try{
    await Student.remove({_id: req.body['_id']})
    res.json({
        message:"Success",
        data: "Document deleted successfully"
    });
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router