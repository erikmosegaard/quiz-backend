const express = require('express')
const knex = require('./knex/knex.js')

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

app.get('/quiz', async (req, res) => {
  let result = await knex('quiz')
                     .select('*')
  res.send(result)
})

app.get('/quiz/:id', async (req, res) => {
  let result = await knex('quiz')
                     .select('*')
                     .where('id', req.params.id)
  if (result.length === 0) {
    res.status(404)
    res.send('NOT FOUND\n')
  } else {
    res.send(result[0])
  }
})

app.post('/quiz', async (req, res) => {
  console.log(req.body.name)
  try {
    await knex('quiz').insert(req.body)
    res.send('OK\n')
  } catch (err) {
    console.log(err)
    res.status(400)
    res.send('FAIL\n')
  }
})

app.put('/quiz/:id', async (req, res) => {
  let result = await knex('quiz').where({id: req.params.id})
  if (result.length === 0) {
    res.status(404)
    res.send('NOT FOUND\n')
    return
  }

  await knex('quiz').update({name: req.body.name}).where({id: req.params.id})

  res.send('OK\n')
})



app.delete('/quiz/:id', async (req, res) => {
  console.log(req.params)

  let result = await knex('quiz').where({id: req.params.id})
  if (result.length === 0) {
    res.status(404)
    res.send('NOT FOUND\n')
    return
  }

  result = await knex('quiz')
                    .where({id: req.params.id})
                    .del()


  res.send('OK')
})


app.listen(3000, () => console.log("Listening on port 3000"))
