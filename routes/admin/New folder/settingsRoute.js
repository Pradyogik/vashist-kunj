var express         = require('express');
var router          = express.Router();

var general 	    = require('../../controllers/admin/settings/general');
var email 	        = require('../../controllers/admin/settings/email');
var sms 	        = require('../../controllers/admin/settings/sms');
var seo 	        = require('../../controllers/admin/settings/seo');

router.get('/general', general.generalList);
router.get('/general/add', general.generalAdd);
router.post('/general/add', general.generalAdd);
router.get('/general/edit/:id?', general.generalEdit);
router.post('/general/edit/:id?', general.generalEdit);
router.get('/general/delete/:id?', general.generalDelete);

router.get('/email', email.emailList);
router.get('/email/add', email.emailAdd);
router.post('/email/add', email.emailAdd);
router.get('/email/edit/:id?', email.emailEdit);
router.post('/email/edit/:id?', email.emailEdit);
router.get('/email/delete/:id?', email.emailDelete);

router.get('/seo', seo.seoList);
router.get('/seo/add', seo.seoAdd);
router.post('/seo/add', seo.seoAdd);
router.get('/seo/edit/:id?', seo.seoEdit);
router.post('/seo/edit/:id?', seo.seoEdit);
router.get('/seo/delete/:id?', seo.seoDelete);

router.get('/sms', sms.smsList);
router.get('/sms/add', sms.smsAdd);
router.post('/sms/add', sms.smsAdd);
router.get('/sms/edit/:id?', sms.smsEdit);
router.post('/sms/edit/:id?', sms.smsEdit);
router.get('/sms/delete/:id?', sms.smsDelete);

module.exports = router;