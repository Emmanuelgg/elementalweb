const express = require('express')
const router = express.Router()
const app = express()

// Error handling
const sendError = (err, res) => {
  response.status = 501
  response.message = typeof err == 'object' ? err.message : err
  res.status(501).json(response)
}
// Response handling
let response = {
  status: 200,
  data: [],
  message: null
}

router.post('/get/ip/address', function (req, res) {
    // need access to IP address here
    console.log(req.method)
    if (req.method !== 'POST'){
        response.status = 400
        response.data = null
        response.message = {success:'', error:'Cannot access to router api'}
        res.send({response})
    } else {
        response.status = 200
        response.data = req.header('x-forwarded-for') || req.connection.remoteAddress
        response.message = {success:"Se obtuvo correctamente la direccion ip",error:""}
        res.send({response})
    }

})

module.exports = router
