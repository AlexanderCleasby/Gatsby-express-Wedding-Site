const router = require('express').Router()
const {invite, rsvp} = require('./models/invite.js')

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

    router.use((err,req,res,next)=>{
        res.status(500).send(':/')
    })

    router.post('/rsvp', async (req,res)=>{
        let currentInvite =  await invite.findOne({code:req.body.code})
        //debugger
        if (currentInvite){
            if(currentInvite.plus1s<Math.max(...req.body.events.map(event=>event.attendees))){
                console.log('Too Many')
                res.status(400).send('Too Many Guests!')
            }
            else{
                currentInvite.rsvps=req.body.events
                currentInvite.save().then((x)=>res.send(x))
            }
        }
        else{
            console.log('oops')
            res.status(400).send("not a valid code.")
        }
        //    invite.updateOne({code:req.body.code},
        //        {
        //            rsvps:req.body.events
        //        },
        //        {runValidators:true},
        //        (err,x)=>{
        //            if(x){
        //                console.log('Updated RSVP')
        //                res.send(x)
        //            }
        //            else{
        //                console.log(err)
        //                res.error(400).send('err writing to databse')
        //            }
        //        }
        //    )
        //}
        
    })
})

module.exports = router