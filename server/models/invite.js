const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rsvpSchema = new Schema({
  title:String,
  attendees:{
    type:Number
  }
})

const inviteSchema = new Schema({
  code:String,
  name:String,
  plus1s:Number,
  rsvps:[rsvpSchema]
})




module.exports = {
  invite:mongoose.model('invite',inviteSchema),
  rsvp:mongoose.model('rsvp',rsvpSchema)
}