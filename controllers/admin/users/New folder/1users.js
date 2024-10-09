var config      = require('../../../config');
const fs        = require('fs');
var common      = require('../../../common_function/common');

// ****************Get All user list *************//

exports.userList = (req, res, next) => {

    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
    const pageSize = 10;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');

   var query = "SELECT id, auth_type, full_name, auth_id, username, email, mobile, password, is_status, is_deleted, created_date FROM users WHERE  is_deleted =0";
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {

        
                res.render('admin/users/user_list_view', { error, success, list: paginatedItems, currentPage, totalPages: Math.ceil(totalPage / pageSize), pageSize });
                
    });

};

//************************* Start Change  User statu Active OR Deactive *****************************//  

exports.changeUserStaus = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
    var id =  req.query.rowid; 
    var status =  req.query.status; 

    var data = "UPDATE users SET is_status = "+status+" WHERE users.id="+id;

    console.log("data");
    console.log(data);

    config.query(data, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;   
            if(servicename){
                res.send(JSON.stringify(1));
            }else{
                res.send(JSON.stringify(0));
            }
        }
        
    }); 
};

//**************************** Start Delete user ****************************************//  

exports.deleteUser = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
        var id =  req.query.rowid; 
        var data = "UPDATE users SET is_deleted = '1' WHERE users.id ="+id;
        console.log(data);
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};

// ****************Get All Admin user list *************//

exports.adminList = (req, res, next) => {

    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
    const pageSize = 10;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');

   var query = "SELECT id, username, email, mobile, password, role_id, is_status, is_deleted, created_date, admin_id FROM admin WHERE is_deleted =0";
            paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {

        
                res.render('admin/users/admin_list_view', { error, success, list: paginatedItems, currentPage, totalPages: Math.ceil(totalPage / pageSize), pageSize });
                
    });
  //  res.render('admin/users/admin_list_view');
};

//************* Start Change  User statu Active OR Deactive **********************//  

exports.changeAdminUserStaus = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
    var id =  req.query.rowid; 
    var status =  req.query.status; 

    var data = "UPDATE admin SET is_status = "+status+" WHERE admin.id="+id;

    config.query(data, function (error, servicedata) {
        if (error) {
            console.error(error.message);
            return;
        }
        else {
            var servicename = servicedata;   
            if(servicename){
                res.send(JSON.stringify(1));
            }else{
                res.send(JSON.stringify(0));
            }
        }
        
    }); 
};

//**************************** Start Delete Admin user ****************************************//  

exports.deleteAdminUser = (req, res, next) => {
    session = req.session;
    //Checking Session 
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
        var id =  req.query.rowid; 
        var data = "UPDATE admin SET is_deleted = '1' WHERE admin.id ="+id;
        console.log(data);
        config.query(data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                var servicename = servicedata;   
                if(servicename){
                    res.send(JSON.stringify(1));
                }else{
                    res.send(JSON.stringify(0));
                }
            }
            
        }); 
};
