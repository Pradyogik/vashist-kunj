var config      = require('../../../config');
const fs        = require('fs');
var common      = require('../../../common_function/common');


exports.userList = (req, res, next) => {
    res.render('admin/users/user_list_view');
};


exports.adminList = (req, res, next) => {
    res.render('admin/users/admin_list_view');
};