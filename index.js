const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use(express.json({ extended: false }))
app.use(router)

app.listen(port, () => console.log('Server running on port ', port))
