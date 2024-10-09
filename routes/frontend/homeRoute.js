var express         = require('express');
var router          = express.Router();

var index 	    = require('../../controllers/frontend/home/index');
var property 	    = require('../../controllers/frontend/home/property_registration');

router.get('/', index.home);
router.get('/home', index.home);
router.post('/login/OtpAuth', index.sendotp);
router.get('/login/otpverify/:mobile', index.otpverify);
router.post('/login/Authotpverify', index.otpverify);
router.get('/login', index.login);
router.get('/registration', index.registration);
router.get('/logout', index.logout);

router.get('/Aplication-Registration', property.aplication_registration_form);
router.get('/pg', property.pg);
router.get('/demo', property.Demo);

router.get('/Scheme-List', property.schemeList);
router.get('/Scheme-Participation', property.schemeParticipation);
router.get('/Scheme-Payment', property.schemePayment);
router.get('/Scheme-Brochure', property.schemeBrochure);
router.get('/Scheme-Advance-fee', property.schemeAdvancefee);


module.exports = router;