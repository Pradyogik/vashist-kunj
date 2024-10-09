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
    var formData = req.body;
    if(req.method == 'POST'){

         var formData = req.body;
         var curr_date = "'" + currentdatetime() + "'";
         var fullname          = "'" + formData.first_name + " "+ formData.last_name + "'";
         var fname             = "'" + formData.first_name + "'";
         var lname             = "'" + formData.last_name + "'";
         var emailid           = "'" + formData.email + "'";
         var mobileno          = "'" + formData.mobile + "'";
         var password          = "'" + formData.password + "'";
         var address           = "'" + formData.address + "'";


       
        var query = "SELECT * FROM users WHERE username ="+ fname +" AND email ="+ emailid +"";

        config.query(query, function (error, results) {

                if (results.length > 0) {

                    req.flash('error', 'Username or email already exists');
                    res.redirect('/admin/users/user');

                }else{

                    var data = "INSERT INTO users(full_name, first_name, last_name, username, email, mobile, password, role_id, address,created_date) VALUES ("+ fullname +','+ fname +','+ lname +','+ fname +','+ emailid +','+ mobileno +','+ password +','+ 9 +','+ address +','+ curr_date +")";
                    config.query(data, function (error, save) {
                        if (error) {
                            console.error(error.message);
                            return;
                        }
                        else {
                            req.flash('success', 'Data Save Succesfully');
                            res.redirect('/admin/users/user');
                        }
    
                    });  
                
                }
        });  

    }else{

        var query = "SELECT id, auth_type, full_name, auth_id, username, email, mobile, password, is_status, is_deleted,address,created_date FROM users WHERE  is_deleted =0";
    

        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
                    
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                    else {
                        paginatedItems = paginatedItems;
                    }
                var error = req.flash('error');
                var success = req.flash('success');
                res.render('admin/users/user_list_view', { error, success, list: paginatedItems, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize});            
            });
    }
};

exports.editUserDetail = (req, res, next) => {

    session = req.session;
    if (!session.user_id) {
        res.redirect("/admin/login");
    }
    const userid = req.params.id;
    const pageSize = 1;
    const currentPage = parseInt(req.query.page) || 1;
    const error = req.flash('error');
    const success = req.flash('success');

    if(req.method == 'POST'){

        var formData = req.body;
        var curr_date         = "'" + currentdatetime() + "'";
        var fullname          = "'" + formData.first_name + " "+ formData.last_name + "'";
        var fname             = "'" + formData.first_name + "'";
        var lname             = "'" + formData.last_name + "'";
        var emailid           = "'" + formData.email + "'";
        var mobileno          = "'" + formData.mobile + "'";
        var address           = "'" + formData.address + "'";
        var result            = formData.row_id;
        var rowid             = result.trim();

         var data = "UPDATE users SET full_name="+ fullname +",first_name="+ fname +",last_name="+ lname +",mobile="+ mobileno +",address="+ address +" WHERE  id="+rowid;

          config.query(data, function (error, save) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                req.flash('success', 'Data Update Succesfully');
                res.redirect('/admin/users/user');
            }

        });  

    }else{

        var query = "SELECT id, full_name, first_name, last_name, username, email, mobile, address, password FROM users WHERE  is_status ='1' AND id="+userid;

      
    
        paginate(query, currentPage, pageSize, function (paginatedItems, totalPage) {
           
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                paginatedItems = paginatedItems;
                console.log(paginatedItems);           
            }
        var error = req.flash('error');
        var success = req.flash('success');
        res.render('admin/users/user_edit_view', { error, success, list: paginatedItems, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize});  
        
    });

    }
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
