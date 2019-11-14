const express = require('express')
const gatsbyExpress = require('gatsby-plugin-express');
const mongoose = require('mongoose')
const app = express()

if (process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log('connected to db'))

app.get('/api',(req,res)=>{
    console.log('foo')
    res.send('foo')
})

app.use(express.static('public/'));
app.use(gatsbyExpress('server/gatsby-express.json', {
  publicDir: 'public/',
  redirectSlashes: true,
}));

app.listen(8001)