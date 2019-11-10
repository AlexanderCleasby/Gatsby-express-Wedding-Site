const express = require('express')
const gatsbyExpress = require('gatsby-plugin-express');
const app = express()

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