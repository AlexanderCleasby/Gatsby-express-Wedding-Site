const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rsvpSchema = new Schema({
  title:String,
  attendees:{
    type:Number,
    validate:[function (v){
      return v < this.plus1s
    }]
  }
})

const inviteSchema = new Schema({
  code:String,
  name:String,
  plus1s:Number,
  rsvps:[rsvpSchema]
})



mongoose.model('rsvp',rsvpSchema,'rsvps')
module.exports = mongoose.model('invite',inviteSchema)