var express         = require('express');
var router          = express.Router();

var login 	    = require('../../controllers/admin/users/login');
var users 	    = require('../../controllers/admin/users/users');

// router.get('/', login.login);
router.get('/login', login.login);
router.post('/adminloginPost', login.loginpost);
router.get('/logout', login.logout);

router.get('/users/user', users.userList);
router.post('/users/user', users.userList);

router.get('/users/edit/:id?', users.editUserDetail);
router.post('/users/edit/:id?', users.editUserDetail);


router.get('/users/changeUserStaus',users.changeUserStaus);

router.get('/users/changeAdminUserStaus',users.changeAdminUserStaus);

router.get('/users/deleteUser',users.deleteUser);

router.get('/users/deleteAdminUser',users.deleteAdminUser);

router.get('/users/admin', users.adminList);


module.exports = router;