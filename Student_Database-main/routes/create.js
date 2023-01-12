const express = require('express');
const router = express.Router();
const Student = require('../model/student');

//submits posts
router.post('/',async (req,res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        Age: req.body.Age,
        isStudent: req.body.isStudent,
        highestQualification: req.body.highestQualification,
        interests: req.body.interests
    });
    
    try{
        const savedPost = await student.save();
        console.log(savedPost._id)
        res.json(
            {
             message:"success",
             data: savedPost
            }
        )
    }catch(err){
       res.json({meaasage: err})
    }
});


module.exports = router