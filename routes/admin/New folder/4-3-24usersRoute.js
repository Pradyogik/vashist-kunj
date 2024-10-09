var express         = require('express');
var router          = express.Router();

var login 	    = require('../../controllers/admin/users/login');
var users 	    = require('../../controllers/admin/users/users');

router.get('/', login.login);
router.get('/login', login.login);
router.post('/adminloginPost', login.loginpost);
router.get('/logout', login.logout);

router.get('/users/user', users.userList);
router.get('/users/admin', users.adminList);


module.exports = router;