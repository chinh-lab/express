'use strict'

require('dotenv').config()

const express = require('express')
const fs = require('fs')
const cors = require('cors')

const port = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!!!'))

app.get('/certifications', (req, res) => {
  const rawData = fs.readFileSync('certifications.json')
  console.log(JSON.parse(rawData))
  res.json(JSON.parse(rawData))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}...`))