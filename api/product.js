const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    return res.json({
      status: 200,
      message: 'Get Data Successfully'
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/test', async (req, res) => {
  try {
    return res.json({
      status: 200,
      message: 'Testing Github Actions'
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
