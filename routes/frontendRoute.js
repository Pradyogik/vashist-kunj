var express         = require('express');
var router          = express.Router();

router.use('/', require('./frontend/homeRoute'));

module.exports = router;