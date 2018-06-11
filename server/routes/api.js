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

console.log('running api')

module.exports = router;
