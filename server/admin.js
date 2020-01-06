const mongoose = require('mongoose');
const {invite, rsvp} = require('./models/invite.js')

if (process.env.NODE_ENV === 'development'){
    require('dotenv').config()
  }

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log('connected to db'))

let action = "list"//process.argv[2]

const displayRSVP = ()=>{
    invite.find({},(err,allUsers)=>{
        let getEvents = user => user.rsvps
            .reduce((acc,event)=>{
                
                acc[event.title] = event.attendees
                return acc
            },{})
        let data = allUsers.map(user=>({name:user.name,code:user.code,...getEvents(user)}))
        console.table(data)
    })
}

switch (action){
    case "list":
        displayRSVP()
}
