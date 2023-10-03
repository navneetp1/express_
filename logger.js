const logger = (req, res, next)=>{
  const method = req.method;
  const url = req.url
  const year = new Date().getFullYear()
  console.log(method, url, year)
  //terminate by sending a header or pass it to the next middleware using nexr() method//
  next()
}


module.exports = logger