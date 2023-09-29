const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/', (req, res)=>{
  res.send(`<h1>Home page</h1><br>
      <hr>
      <a href="/api/products">Products</a> `)
})

app.get('/api/products', (req, res)=>{
  const productList = products.map((product)=>{
    //destructuring content from the file/api

    const {id, name, image} = product
    return {id, name, i}

  })
  res.json(productList)
})

app.get('/api/products/:id', (req, res)=>{

  //using the parameters passed in the req url
  const { id } = req.params
  //note that the name of the property that you destructure from req.params should be the one displayed in the url..(below)

  ///api/products/:id = const {id} = req.params
  console.log(req.params)

  const singleProduct = products.find(
    (product) => product.id === Number(id))

  if(!singleProduct){
    return res.status(404).send("Product doesn't exist in the database.")
  }

  return res.json(singleProduct)
})

//the changing part in the url is denoted by colon ':', the other constant parameters must not change eg:- reviews / products etc..

app.get('/api/products/:id/reviews/:reviewID', (req, res)=>{
  console.log(req.params)
  res.send("reviews here... ")
})


app.listen(5000, ()=> {
  console.log("server running at port 5000.....")
})