const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');

exports.home = (req, res, next) => {
    session = req.session;
    var error = req.flash('error');
    var success = req.flash('success');
   
    res.render('frontend/pages/home', { error, success,  active: 'home'});

};

exports.login = (req, res, next) => {
    session = req.session;
    var error = req.flash('error');
    var success = req.flash('success');
    if (req.session.ayodhyalandproperty) {
        res.redirect("/Aplication-Registration");
    }
    if (!req.session.returnTo) {
        req.session.returnTo = req.header('Referer') || '/';
    }
    res.render('frontend/pages/index', { error, success, otpdata:'',  active: 'index'});

};


exports.sendotp = (req, res, next) => {
    session = req.session;

    const mno = req.body.mobile.trim();
    const phoneNumber = mno;
    
    if(!phoneNumber)
        {
            req.flash('error', 'Mobile Number is Required');
            res.redirect('/login');
        }
   

    // Generate a random OTP
    //const otp = 111111;
    const otp =  790880//Math.floor(100000 + Math.random() * 900000);
  
   
    const msg = "ADAAYO%20-%20Your%20OTP%20for%20login%20is%20" + otp + "%20Please%20do%20not%20share%20your%20OTP%20to%20anyone";

    // Send the OTP via SMS
    sendSMS(msg, phoneNumber);

    var curr_date = "'" + currentdatetime() + "'";
    var cr_phone = "'" + phoneNumber + "'";
    var cr_otp = "'" + otp + "'";
    // checking mobile number is Exists
    var check = "SELECT mobile FROM users WHERE mobile="+cr_phone;

    config.query(check, function (error, ch) {
        if (error) {
            console.error(error.message);
            return;
        }
        else if (ch.length > 0) {
            // if mobile no exists update otp
            var data = "UPDATE users SET mobile_otp=" + cr_otp + ", is_mobile_verify=" + 0 + " WHERE mobile ="+cr_phone;


            config.query(data, function (error, save) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    req.flash('success', 'OTP Sent Succesfully');
                    res.redirect('/login/otpverify/' + encrypt(phoneNumber));

                }

            });
        }

        else {

            // if mobile number is not  Exists insert new user with otp
            var data = "INSERT INTO users(mobile, mobile_otp, created_date, role_id)  VALUES (" + cr_phone + ',' + cr_otp + ',' + curr_date + ',' + 9 + ")";
            // if mobile number is not  Exists insert new user with otp




            config.query(data, function (error, save) {
                if (error) {
                    console.error(error.message);
                    return;
                }

                var data1 = "SELECT id FROM users WHERE mobile="+cr_phone;

                config.query(data1, function (error, getuid) {
                    if (error) {
                        console.error(error.message);
                        return;
                    }

                    else {
                        getuids = getuid;
                        console.log(getuids);
                    }
                    



                });

            });

            req.flash('success', 'OTP Sent Succesfully');
            res.redirect('/login/otpverify/' + encrypt(phoneNumber));


        }
    });


};


exports.otpverify = (req, res, next) => {
    session = req.session;


    if (req.method == 'POST') {

        const mobile = decrypt(req.body.mobile);
       
        var finalsetOtp = req.body.otp;
        console.log(finalsetOtp);

        if(!mobile || !finalsetOtp)
        {
            req.flash('error', 'OTP is Required');
            res.redirect('/login/otpverify/' + encrypt(mobile));
        }

        // checking otp match
        var otp = "SELECT mobile_otp FROM users WHERE mobile='"+mobile+"'";
        console.log(otp);

        config.query(otp, function (error, checlotp) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                if (checlotp[0].mobile_otp == finalsetOtp) {

                    var otpupdates = "UPDATE users SET is_mobile_verify=" + 1 + " WHERE mobile ='"+mobile+"' ";
                    config.query(otpupdates, function (error, fi) {

                        if (error) {
                            console.error(error.message);
                            return;
                        }

                        else {

                            var sessionquerys = "SELECT *   FROM users WHERE mobile="+mobile;
                            console.log(sessionquerys);
                            config.query(sessionquerys, function (error, sessdatas) {

                                if (error) {
                                    console.error(error.message);
                                    return;
                                }

                                else {
                                    //User_id
                                    req.session.user_id = sessdatas[0].id;
                                    // User Role
                                    req.session.role_id = sessdatas[0].role_id;
                                    // User type
                                    req.session.ayodhyalandproperty = 'ayodhyalandproperty';
                                    //User Login ID
                                    req.session.email = sessdatas[0].email;
                                    //User role Name
                                    req.session.mobile = sessdatas[0].mobile;
                                    //User full name
                                    req.session.fullname = sessdatas[0].first_name + " " + sessdatas[0].last_name;
                                    //User 
                                    req.session.is_mobile_verify = sessdatas[0].is_mobile_verify;
                                    req.flash('success', 'Your Mobile number has been successfully verified');
                                    const returnTo = req.session.returnTo;
                                    console.log(returnTo);
                                    delete req.session.returnTo;
                                    res.redirect(returnTo);



                                }




                            });

                        }



                    });


                }
                else {
                    req.flash('error', 'OTP Not Match');
                    res.redirect('/login/otpverify/' + encrypt(mobile));

                }

            }

        });
    }


    else {

        const phoneNumber = decrypt(req.params.mobile);
        const err = req.flash('error');
        const suc = req.flash('success');
        res.render('frontend/pages/otp', { success: suc, error: err, postmobile: phoneNumber,pageactive: '' });


    }

};

exports.registration = (req, res, next) => {
    session = req.session;
    console.log(session);
    if (!session.ayodhyalandproperty) {
        req.flash('error', 'Please Login first ');
		res.redirect("/login");
	}
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/registration', { error, success,  active: 'registration' });

};

exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect("/login");
};