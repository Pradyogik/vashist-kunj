var express         = require('express');
var router          = express.Router();

var module 	        = require('../../controllers/admin/projectmodule/pmodule'); 
//var menu 	        = require('../../controllers/admin/projectmodule/menu');
//var assignment 	    = require('../../controllers/admin/projectmodule/moduleMenuAssignment');


//router.get('/module', module.moduleList);
/*router.get('/module/add', module.moduleAdd);
router.post('/module/add', module.moduleAdd);
router.get('/module/edit/:id?', module.moduleEdit);
router.post('/module/edit/:id?', module.moduleEdit);
router.get('/module/delete/:id?', module.moduleDelete); 


router.get('/menu', menu.menuList);
router.get('/menu/add', menu.menuAdd);
router.post('/menu/add', menu.menuAdd);
router.get('/menu/edit/:id?', menu.menuEdit);
router.post('/menu/edit/:id?', menu.menuEdit);
router.get('/menu/delete/:id?', menu.menuDelete);

router.get('/assignment', assignment.assignmentList);
router.get('/assignment/add', assignment.assignmentAdd);
router.post('/assignment/add', assignment.assignmentAdd);
router.get('/assignment/edit/:id?', assignment.assignmentEdit);
router.post('/assignment/edit/:id?', assignment.assignmentEdit);
router.get('/assignment/delete/:id?', assignment.assignmentDelete);*/

module.exports = router;