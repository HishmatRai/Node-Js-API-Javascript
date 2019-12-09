const express = require("express");

const router = express.Router();

router.use('/Users',require('./Users/User'))


module.exports = router