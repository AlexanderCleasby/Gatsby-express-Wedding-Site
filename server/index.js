const express = require('express')
const gatsbyExpress = require('gatsby-plugin-express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()

const port = process.env.PORT || 8001

if (process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log('connected to db'))

app.get('/api',(req,res)=>{
    console.log('foo')
    res.send('foo')
})

//new invite({code:"ABCDE",name:"alex",plus1s:2},(err,x)=>console.log(err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api', require('./api.js'))
app.use(express.static('public/'));
app.use(gatsbyExpress('server/gatsby-express.json', {
  publicDir: 'public/',
  redirectSlashes: true,
}));

app.listen(port)