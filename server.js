const express = require("express");
const app = express();
const mongoose = require("./Config/db")
// // const router = express.Router();


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("successful")});

app.listen(3000,()=>{
    console.log("server chal rha ha 3000")
})

app.use(express.json());

app.use('/',require("./Routes"))






// 
// router.get("/about",(req,res)=>{
//     res.send({message:"data mil rha ha"})

// })

// app.get("/getdata",(req,res)=>{
//     res.send({
//         name:"hishmat rai",
//         roll : "118",
//         school : "saylani",
//         address:"karachi",
//         year :"last"
//     })
// })


// fetch("http://localhost:3000/about")
// .then(Response=>Response.json())
// .then(json =>console.log(json))
// module.express = router