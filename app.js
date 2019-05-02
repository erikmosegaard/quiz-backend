const express = require('express')

console.log('Willkommen zu unserem Quiz-Backend!')

var gugus = "Gugus"

const app = express()

app.use(express.json())

app.get('/gugus', (req, res) => {
  console.log('Jemand will Gugus von uns!')
  //console.log(req)
  if (req.query.speziell === 'true') {
    res.json({data: 'Spezieller ' + gugus})
  } else {
    res.json({data: gugus})
  }
})

app.put('/gugus', (req, res) => {
  gugus = req.body.data
  res.send('OK')
})

app.listen(3000)
