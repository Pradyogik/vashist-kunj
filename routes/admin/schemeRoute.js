var express         = require('express');
var router          = express.Router();

var scheme 	        = require('../../controllers/admin/scheme/scheme');
var schemepayment 	        = require('../../controllers/admin/scheme/scheme_payment');



router.get('/scheme', scheme.schemeList);
router.post('/scheme', scheme.schemeList);


router.get('/scheme-payment-add', schemepayment.scheme_payment_add);
router.post('/scheme-payment-add', schemepayment.scheme_payment_add);

router.get('/scheme-add', scheme.schemeAdd);
router.post('/scheme-add', scheme.schemeAdd);
module.exports = router;