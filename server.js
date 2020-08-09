const express = require('express')
const app = express()
const groupJson = {
  Shehbaz: "Java Developer",
  Rafiaan: "Python Developer",
  Adnan:"ReactNative Developer",
  Ejaz:"Reactjs Developer",
  Shamuwel:"TPO Developer",
  "Bilal":"Rpa Developer"
}

app.get('/' ,(req,res)=>{
  res.send('<h1>First Heroku Deployment</h1>')
})

app.get('/group', (req,res)=>{
  res.json(groupJson)
})


const PORT = 5000
app.listen(PORT, ()=> `PORT is succesfully running on ${PORT}`)