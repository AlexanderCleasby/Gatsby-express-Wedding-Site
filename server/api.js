const router = require('express').Router()
const invite = require('./models/invite.js')

router.post('/invite',(req,res)=>{
    invite.findOne({code:req.body.code},(err,x)=>{
        if(x){
            console.log(`code for ${x.name} entered.`)
            res.send(x)
        }
        else{
            console.log("nothing found")
            res.status(400).send("not a valid code.")
        }
    })


    router.post('/rsvp',(req,res)=>{
        invite.updateOne({code:req.body.code},
            {
                events:req.body.events
            },
            {runValidators:true},
            (err,x)=>{
                if(x){
                    console.log('Updated RSVP')
                    res.send(x)
                }
                else{
                    console.log(error)
                    res.error(400).send('err writing to databse')
                }
            }
        )
        
    })
})

module.exports = router