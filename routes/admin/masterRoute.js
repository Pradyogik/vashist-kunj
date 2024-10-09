var express         = require('express');
var router          = express.Router();

var land 	        = require('../../controllers/admin/masters/land_category');
var property 	        = require('../../controllers/admin/masters/property_size');
var reserve 	        = require('../../controllers/admin/masters/reserve_category');



router.get('/land-category', land.landAdd);
router.post('/land-category', land.landAdd);


router.get('/property-size', property.PropertySizeAdd);
router.post('/property-size', property.PropertySizeAdd);

router.get('/reserve-category', reserve.reserveAdd);
router.post('/reserve-category', reserve.reserveAdd);

module.exports = router;