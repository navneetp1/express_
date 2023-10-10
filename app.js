const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//to parse form data
app.use(express.urlencoded({extended : false}))

//parsing json (necessary for post requests)
app.use(express.json())

//middleware for all requests and routes imported from a different source
app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, ()=>{
  console.log('server playing at $5000.')
})