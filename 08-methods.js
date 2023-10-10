//http methods 
// GET - get data
// POST - insert data
// PUT - update data
// DELETE - delete data

//get and post ---

const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))

//to parse form data
app.use(express.urlencoded({extended : false}))
//it parses incoming requests with url encoded payloaads ; it works specifically for html forms that use the 
//"application/x-www-form-urlencoded" format. 
//payloads are the data the form elements carry with them to be supplied to the server

app.get('/api/people', (req, res)=>{
  res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res)=>{
  const {name} = req.body
  console.log(req.body)

  if(name){
    res.status(200).send(`Welcome ${name}`)
  }
  else{
    res.status(401).send('Please enter the required information')
  }
 
})

app.post('/api/people', (req, res)=>{
  const { name } = req.body

  if(!name) {
    return res
      .status(400)
      .json({success : false, msg: 'Please provide a valid entry.'})
  }
  res.status(200).json({success: true, person: name })
})


app.listen(5000, ()=>{
  console.log('server playing at $5000.')
})