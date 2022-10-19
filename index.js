const express = require('express')
const app = express()
const port = 3000
const product = require('./api/product')

app.use(express.json({ extended: false }))
app.use('/api/product', product)

app.listen(port, () => console.log('Server running on port ', port))
