const router = require("express").Router();
//login


router.post("/login",(req,res)=>{
   const username = req.body.username
   const password  = req.body.password
    if(username === "Admin123" && password === "Admin123"){
        res.status(200).json("You have successfully logedin")
    }
    else{
        res.status(500).json("Wrong Username and passward")
    }

})
module.exports= router;


