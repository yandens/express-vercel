const index = async (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: 'Get Data Successfully'
    })
  } catch (err) {
    console.log(err)
  }
}

const test = async (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: 'Testing Github Actions'
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { index, test }
