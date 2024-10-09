var config      = require('../../../config');
const fs        = require('fs');
const md5 = require('md5');
var common      = require('../../../common_function/common');


exports.login = (req, res, next) => {
    const error     = req.flash('error');
    const success     = req.flash('success');

        session = req.session;
        if(session.arrunadmin) {
            res.redirect("/admin/dashboard");
        }
        res.render('admin/users/login_view',{error,success});
    
};

exports.loginpost = (req, res, next) => {
    const error     = req.flash('error');
    const success     = req.flash('success');

    if(req.method == 'POST') {
        var username        = req.body.username;
        var password        = req.body.password;

        loginQuery = "SELECT * FROM admin where username='"+username+"' AND password = '"+md5(password)+"' AND is_status=1 ";
        config.query(loginQuery, (err, result) => {
            if (err) {
                console.error(err.message);
                req.flash('error', 'Invalid Username or Password.');
                res.redirect('/admin/login'); 
            } else {
                //console.log(result);return;
                if(!result[0]) {
                    req.flash('error', 'Invalid Username or Password.');
                    res.redirect('/admin/login'); 
                } else{
                    finalResult             = result[0];
                    req.session.user_id    = finalResult.id;
                    req.session.username    = finalResult.username;
                    req.session.arrunadmin   = 'arrunanchaladmin';
                    req.session.userEmail   = finalResult.email;
                    req.session.mobile      = finalResult.mobile;
                    req.session.role        = finalResult.role_id;
                    console.log(req.session);
                    req.flash('success', 'Login successfully');
                    res.redirect('/admin/dashboard');
                }
                
            }
        });

    }
    else {
        res.send('error');
    }
  
    
};

exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect("/admin/login");
};