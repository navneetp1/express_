const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))

//to parse form data
app.use(express.urlencoded({extended : false}))

//parsing json (necessary for post requests)
app.use(express.json())


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

  const {name} = req.body

  if(!name) {
    return res
      .status(400)
      .json({success : false, msg: 'Please provide a valid entry.'})
  }

  res.status(201).json({success: true, person: name })

})

app.post('/api/postman/people', (req, res)=>{
  const {name} = req.body

  if(!name) {
    return res
      .status(400)
      .json({success : false, msg: 'Please provide a valid entry.'})
  }

  res.status(201).json({success: true, person: [...people, name]})
})

app.listen(5000, ()=>{
  console.log('server playing at $5000.')
})