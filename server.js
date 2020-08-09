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
const officeGroup = {
  "Office Friend": ['Rohan', 'Pratesh', 'Shuklaji', 'Zulekha', 'Maryam']
}
app.use(express.json())
app.get('/', (req, res) => {
  res.send('First Heroku Deployment')
})

app.get('/group', (req, res) => {
  res.json(groupJson)
})

app.get('/officegroup', (req,res)=> {
  res.json(officeGroup)
})

app.get('/newfeature', (req, res) => {
  res.send('Heroku is awesome')
})

const port = process.env.PORT || 5000
app.listen(port, () => `PORT is succesfully running on ${port}`)