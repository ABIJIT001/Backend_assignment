const express = require('express');
const router = express.Router();
const Student = require('../model/student');

//shows a particular post using request query
router.get('/',async (req,res) => {
    try {
        const post = await Student.findById(req.query._id)
        res.json({message : "Success" , data : post})
      } catch (err) {
        res.json({message: err})
      }
});


module.exports = router