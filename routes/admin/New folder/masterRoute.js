var express         = require('express');
var router          = express.Router();

var department 	    = require('../../controllers/admin/masters/department');
var designation 	= require('../../controllers/admin/masters/designation');
var role 	        = require('../../controllers/admin/masters/role');
var category 	    = require('../../controllers/admin/masters/category');
var dress 	        = require('../../controllers/admin/masters/dress');
var food 	        = require('../../controllers/admin/masters/food');
var instrument 	    = require('../../controllers/admin/masters/instrument');
var occasions 	    = require('../../controllers/admin/masters/occasions');
var company 	    = require('../../controllers/admin/masters/company');
var dance 	        = require('../../controllers/admin/masters/dance');
// var module 	        = require('../../controllers/admin/masters/module');

router.get('/department', department.departmentList);
router.get('/department/add', department.departmentAdd);
router.post('/department/add', department.departmentAdd);
router.get('/department/edit/:id?', department.departmentEdit);
router.post('/department/edit/:id?', department.departmentEdit);
router.get('/department/delete/:id?', department.departmentDelete);
router.get('/department/changeDepartmentStaus/:id?', department.departmentChangeStaus);



router.get('/designation', designation.designationList);
router.get('/designation/add', designation.designationAdd);
router.post('/designation/add', designation.designationAdd);
router.get('/designation/edit/:id?', designation.designationEdit);
router.post('/designation/edit/:id?', designation.designationEdit);
router.get('/designation/delete/:id?', designation.designationDelete);
router.get('/designation/changeDesignationStaus/:id?', designation.designationChangeStaus);



router.get('/role/add', role.roleAdd);
router.post('/role/add', role.roleAdd);
router.get('/role/edit/:id?', role.roleEdit);
router.post('/role/edit/:id?', role.roleEdit);
router.get('/role/delete/:id?', role.roleDelete);
router.get('/role/changeRoleStaus/:id?', role.roleChangeStaus);


router.get('/category/add', category.categoryAdd);
router.post('/category/add', category.categoryAdd);
router.get('/category/edit/:id?', category.categoryEdit);
router.post('/category/edit/:id?', category.categoryEdit);
router.get('/category/delete/:id?', category.categoryDelete);
router.get('/category/changeCategoryStaus/:id?', category.categoryChangeStaus);

// router.get('/dress', dress.dressList);
router.get('/dress/add', dress.dressAdd);
router.post('/dress/add', dress.dressAdd);
router.get('/dress/edit/:id?', dress.dressEdit);
router.post('/dress/edit/:id?', dress.dressEdit);
router.get('/dress/delete/:id?', dress.dressDelete);
router.get('/dress/changeDressStaus/:id?', dress.dressChangeStaus);


router.get('/dance/add', dance.danceAdd);
router.post('/dance/add', dance.danceAdd);
router.get('/dance/edit/:id?', dance.danceEdit);
router.post('/dance/edit/:id?', dance.danceEdit);
router.get('/dance/delete/:id?', dance.danceDelete);
router.get('/dance/changeDanceStaus/:id?', dance.danceChangeStaus);

router.get('/food', food.foodList);
router.get('/food/add', food.foodAdd);
router.post('/food/add', food.foodAdd);
router.get('/food/edit/:id?', food.foodEdit);
router.post('/food/edit/:id?', food.foodEdit);
router.get('/food/delete/:id?', food.foodDelete);
router.get('/food/changeFoodStaus/:id?', food.foodChangeStaus);


router.get('/instrument', instrument.instrumentList);
router.get('/instrument/add', instrument.instrumentAdd);
router.post('/instrument/add', instrument.instrumentAdd);
router.get('/instrument/edit/:id?', instrument.instrumentEdit);
router.post('/instrument/edit/:id?', instrument.instrumentEdit);
router.get('/instrument/delete/:id?', instrument.instrumentDelete);
router.get('/instrument/changeInstrumentStaus/:id?', instrument.instrumentChangeStaus);

// router.get('/occasions', occasions.occasionsList);
router.get('/occasions/add', occasions.occasionsAdd);
router.post('/occasions/add', occasions.occasionsAdd);
router.get('/occasions/edit/:id?', occasions.occasionsEdit);
router.post('/occasions/edit/:id?', occasions.occasionsEdit);
router.get('/occasions/delete/:id?', occasions.occasionsDelete);
router.get('/occasions/changeOccasionsStaus/:id?', occasions.occasionsChangeStaus);


router.get('/company/add', company.companyAdd);
router.post('/company/add', company.companyAdd);
router.get('/company/edit/:id?', company.companyEdit);
router.post('/company/edit/:id?', company.companyEdit);
router.get('/company/delete/:id?', company.companyDelete);
router.get('/company/changeCompanyStaus/:id?', company.companyChangeStaus);


module.exports = router;