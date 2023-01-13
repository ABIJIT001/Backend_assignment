const express = require('express');
const router = express.Router();
var async = require('async');
const Student = require('../model/student');

//submits posts
router.patch('/',async  (req,res) => {
    const mongodoc = await Student.find({"_id" : req.body._id})
    const review = mongodoc[0]
    let array = Object.keys(req.body)
    const x = [] 

   async.eachSeries(array, function updateObject (obj, alldone) {
    console.log(obj)
    // Model.update(condition, doc, callback)
     Student.findOneAndUpdate({ "_id": req.body._id }, { $set : { [obj]: req.body[obj] }}, alldone);
}, function allDone (err) {
});


const updated = await Student.findById(req.body._id)
res.json({message: "success", data: updated})


   
});


module.exports = router
