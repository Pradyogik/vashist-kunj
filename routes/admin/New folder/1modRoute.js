var express         = require('express');
var router          = express.Router();

var mod	            = require('../../controllers/admin/mod/module');
var menu 	        = require('../../controllers/admin/mod/menu');
var assignment 	    = require('../../controllers/admin/mod/assignment');


router.get('/module/add', mod.moduleAdd);
router.post('/module/add', mod.moduleAdd);
router.get('/module/edit/:id?', mod.moduleEdit);
router.post('/module/edit/:id?', mod.moduleEdit);
router.get('/module/delete/:id?', mod.moduleDelete);
router.get('/module/changeModuleStatus',mod.changeModuleStatus);


router.get('/menu/add', menu.menuAdd);
router.post('/menu/add', menu.menuAdd);
router.get('/menu/edit/:id?', menu.menuEdit);
router.post('/menu/edit/:id?', menu.menuEdit);
router.get('/menu/delete/:id?', menu.menuDelete);
router.get('/menu/changeMenuStatus',menu.changeMenuStatus);

// router.get('/assignment', assignment.assignmentList);
router.get('/assignment/add', assignment.assignmentAdd);
// router.get('/assignment/addRole', assignment.assignmentAddRole);
router.post('/assignment/add', assignment.assignmentAdd);
router.get('/assignment/edit/:id?', assignment.assignmentEdit);
router.post('/assignment/edit/:id?', assignment.assignmentEdit);
router.get('/assignment/delete/:id?', assignment.assignmentDelete);

module.exports = router;