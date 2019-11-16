const router = require('express').Router()
const invite = require('./models/invite.js')

router.post('/invite',(req,res)=>{
    invite.findOne({code:req.body.code},(err,x)=>{
        if(x){
            console.log(x)
            res.send(x)
        }
        else{
            console.log("nothing found")
            res.status(400).send("not a valid code.")
        }
    })

})

module.exports = router