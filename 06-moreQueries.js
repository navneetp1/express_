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
    return {id, name, image}

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

//adding and utiliizing queries from the url
app.get('/api/v1/query', (req, res)=>{
  console.log(req.query)
  // res.send("accessing query page..")

  const {search, limit, priceLimit} = req.query
  let sortedProducts = [...products]

  // http://localhost:5000/api/v1/query?search=a&limit=2&priceLimit=40 

  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }

  if(priceLimit){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.price < Number(priceLimit)
    })
  }

  //limit of total products
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  //if there are no products in the aray
  if(sortedProducts.length < 1){
    return res.status(200).send("Product doesn't exist.")
    // return res.status(200).json({success: false , data: [] })
  }

  // console.log(sortedProducts)

  res.status(200).json(sortedProducts)
})

app.listen(5000, ()=> {
  console.log("server running at port 5000.....")
})