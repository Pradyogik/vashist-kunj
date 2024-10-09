var express         = require('express');
var router          = express.Router();

var login 	    = require('../../controllers/admin/users/login');

// router.get('/', login.login);
router.get('/login', login.login);
router.post('/adminloginPost', login.loginpost);
router.get('/logout', login.logout);


module.exports = router;