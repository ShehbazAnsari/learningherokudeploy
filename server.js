const express = require('express')
const app = express()
const groupJson = {
  Shehbaz: "Java Developer",
  Rafiaan: "Python Developer",
  Adnan: "ReactNative Developer",
  Ejaz: "Reactjs Developer",
  Shamuwel: "TPO Developer",
  "Bilal": "Rpa Developer"
}
app.use(express.json())
app.get('/', (req, res) => {
  res.send('First Heroku Deployment')
})

app.get('/group', (req, res) => {
  res.json(groupJson)
})


const port = process.env.PORT || 5000
app.listen(port, () => `PORT is succesfully running on ${port}`)