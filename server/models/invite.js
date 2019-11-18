const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inviteSchema = new Schema({
  code:String,
  name:String,
  plus1s:Number,
  events:[{
    title:String,
    attendees:Number
  }]
})

module.exports = mongoose.model('invite',inviteSchema)