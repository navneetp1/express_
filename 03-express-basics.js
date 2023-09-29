const express = require('express')
const path = require('path')
const app = express()

app.use(express.static("./navbar-app"))
//.static() pushes all static files to the server and renders it
//static pushes all files from the folder, the files are later handled by express automatically 

app.get("/", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})

app.all('*',(req, res)=>{
  res.status(404).send("resource not found.")
})

app.listen(5000, ()=>{
  console.log("server listening at port $000.");
})
