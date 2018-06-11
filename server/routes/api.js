const express = require('express');
const router = express.Router();
const app = express();

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};
// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

router.post('/get/ip/address', function (req, res) {
    // need access to IP address here
    response.ok = true;
    response.data = req.header('x-forwarded-for') || req.connection.remoteAddress;
    response.status = 1;
    response.message = {success:"Se obtuvo correctamente la direccion ip",error:""};
    res.send({response});
});

module.exports = router;
