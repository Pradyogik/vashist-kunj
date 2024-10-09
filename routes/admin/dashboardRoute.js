var express         = require('express');
var router          = express.Router();

var dashboard 	    = require('../../controllers/admin/dashboard/dashboard');

router.get('/dashboard', dashboard.dashboard);

module.exports = router;