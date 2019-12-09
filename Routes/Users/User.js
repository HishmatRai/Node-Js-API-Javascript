const express = require("express");
const router = express.Router();
const User = require("./../model/schema")
router.get('/current',(req,res)=>{
    res.send({
        message : "current user Hishmat rai"
    })
})


router.post("/adduser", (req,res)=> {
const user = new User(req.body)
user.save().then(()=>{
    res.send({
        message: "User Add Succefully"
    })
}) 
.catch((err)=> {
res.send({
    message: err
})
})
})




router.post("/deleteuser", async(req,res)=> {
   await User.findOneAndDelete(req.body).then(()=>{
        res.send({
            message: "User delete Succefully"
        })
    }) 
    .catch((err)=> {
    res.send({
        message: err
    })
    })
    })


    
router.post("/updateuser", async(req,res)=> {
    await User.findOneAndUpdate(req.body , {name: "hishamt"}).then(()=>{
         res.send({
             message: "User Update Succefully"
         })
     }) 
     .catch((err)=> {
     res.send({
         message: err
     })
     })
     })


module.exports = router




// fetch('http://localhost:3001/user/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name: "ghous",age: 20,school: "Saylani"})
//   })