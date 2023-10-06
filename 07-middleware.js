const express = require('express')
const morgan = require('morgan')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//applying middleware to specific routes
//app.use('/api', logger)
//logger would be applied to any path starting from the given - /api path


//to use the middleware in all routes - we use app.use(<middleware>)
//logger and authorize being the middleware here


//middlewares can be - custom / pre-defined / third - party
// app.use({authorize, logger})
//app.use(express.static(""))
//app.use(morgan('tiny))


///passing multiple middlewares into one route - [logger, authorize]
app.use(morgan('tiny'))
app.get('/', (req, res)=>{
  console.log(req.user)
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