const express = require('express')
const app = express()
const logger = require('./logger')


//to use the middleware in all routes - we use app.use(<middleware>)
app.use(logger)

//applying middleware to specific routes
//app.use('/api', logger)
//logger would be applied to any path starting from the given - /api path


app.get('/',  (req, res)=>{
  res.send("<h1>Home Page</h1>")
})

app.get('/about',  (req, res)=>{
  res.send("<h1>About Page</h1>")
})
app.get('/api/products',  (req, res)=>{
  res.send("<h1>Products Page</h1>")
})
app.get('/api/items',  (req, res)=>{
  res.send("<h1>Items Page</h1>")
})

app.listen(5000, ()=>{
  console.log("server running at port 5000...")
})