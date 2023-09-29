const express = require('express')
const app = express()
const {people} = require('./data')

app.get('/', (req, res)=>{
  res.json(people)
})

app.listen(5000, ()=>{
  console.log("server running at port 5000...");
})