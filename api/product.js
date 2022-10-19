const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'Get Data Successfully'
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
