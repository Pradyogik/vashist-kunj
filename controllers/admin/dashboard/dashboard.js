var config      = require('../../../config');
const fs        = require('fs');
var common      = require('../../../common_function/common');

exports.dashboard = (req, res, next) => {
    
    session = req.session;
    if(!session.arrunadmin) {
        res.redirect("/admin/login");
    } 
    const pageSize = 5;
    const currentPage = parseInt(req.query.page) || 1;

    var cntProduct = "SELECT COUNT(product_id) as product FROM tbl_product;";
    config.query(cntProduct, function (error, productData) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var ttlProduct = productData;
        }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/dashboard/dashboard_view', { error, success, ttlProduct:ttlProduct});	
    
    });	

}; 
