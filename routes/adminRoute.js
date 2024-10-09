var express         = require('express');
var router          = express.Router();


//router.use('/cms', require('./admin/cmsRoute'));

//router.use('/masters', require('./admin/masterRoute'));

//router.use('/mod', require('./admin/modRoute'));

//router.use('/tribe', require('./admin/tribeRoute'));
//router.use('/tribe', require('./admin/tribeRoute'));
//router.use('/settings', require('./admin/settingsRoute'));
//router.use('/extra', require('./admin/extraRoute'));

router.use('/', require('./admin/dashboardRoute'));
router.use('/', require('./admin/usersRoute'));
router.use('/', require('./admin/productRoute'));
router.use('/', require('./admin/masterRoute'));
router.use('/', require('./admin/schemeRoute'));

module.exports = router;