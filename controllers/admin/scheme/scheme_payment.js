const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');

exports.scheme_payment_add = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('admin/schemePayment/scheme_payment_add', { error, success,  active: 'scheme_payment_add' });

};