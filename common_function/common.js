var config      = require('./../config');
const fs = require('fs');


//This Helper function created by Pawan
const crypto = require('crypto');
const axios = require('axios');
const nodemailer = require('nodemailer');

// Replace 'your-secret-key' with your own secret key
let ENCRYPTION_KEY = 'your-secret-key';

// Pad or truncate the key to ensure it has a length of 32 bytes
while (ENCRYPTION_KEY.length < 32) {
    ENCRYPTION_KEY += '0';
}

const IV_LENGTH = 16;
// Function to encrypt data
global.encrypt = function (id) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    const encrypted = cipher.update(id.toString(), 'utf-8', 'hex') + cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

// Function to decrypt data
global.decrypt = function (encryptedId) {
    const [iv, encrypted] = encryptedId.split(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(iv, 'hex'));
    const decrypted = decipher.update(encrypted, 'hex', 'utf-8') + decipher.final('utf-8');
    return decrypted;
}

//This function use for only date formate d-m-Y
global.formatDatedmy = function (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
}

//This function use for only date formate Y-m-d
global.formatDateymd = function (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

global.creenttime = function () {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return (hours + ":" + minutes + ":" + seconds);
}

global.currentdatetime = function () {
    const moment = require('moment-timezone');

// Set the time zone to Asia/Kolkata
const asiaKolkataTime = moment.tz('Asia/Kolkata');

// Get the current time in the Asia/Kolkata time zone
const currentTime = asiaKolkataTime.format('YYYY-MM-DD HH:mm:ss');
    return (currentTime);
}


global.convertDMYtoYMD = function(dateString) {
    var parts = dateString.split("-");
    var dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

    var year = dateObject.getFullYear();
    var month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
    var day = ('0' + dateObject.getDate()).slice(-2);

    // Assemble the YMD date string
    var ymdDateString = year + '-' + month + '-' + day;
    return ymdDateString;
}

//This function use for only date formate Y-m-d
global.formatDateymd = function (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


global.paginate = function(query, pageNumber, pageSize, callback) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    config.query(query, function (error, results) {
        if (error) throw error;

        const paginatedData = results.slice(startIndex, endIndex);
        callback(paginatedData, results.length);
    });
}

global.currentdatetime = function () {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}

global.procedurePaginate = function(query, pageNumber, pageSize, callback) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    config.query(query, function (error, queryResult) {
        if (error) throw error;
        results = queryResult[0];
        const paginatedData = results.slice(startIndex, endIndex);
        callback(paginatedData, results.length);
    });
}


global.generateCSRFToken = function(res) {
    const csrfToken = crypto.randomBytes(16).toString('hex');
    console.log(csrfToken)
    res.cookie('mycsrfToken', csrfToken);
    return csrfToken;
}
   
// validate CSRF token middleware
global.validateCSRFToken = function(req, res) {
    const csrfToken = req.cookies.mycsrfToken;
    if (req.body.csrfToken === csrfToken) {
        generateCSRFToken(res);
        return true;
    } else {
        return false;
    }
} 


// Function to send OTP via email
global.sendOTP = function (email, subject, html) {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service
        auth: {
            
            user: 'eindigenousap@gmail.com', // Your email address
            pass: 'uwyu esvu zrvk euiq' // Your email password
        }
    });

    // Email content
    const mailOptions = {
        from: 'eindigenousap@gmail.com', // Sender address
        to: email, // Recipient address
        subject: subject, // Subject line
        text: html // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

global.fileupload = function (path, filename, filepost, callback) {
    var filePermission = 777;

    fs.access(path, (error) => {
        if (error) {
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true }, { mode: filePermission }, (error) => {
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                });
            }
        }

        var filemovepath    = path;
        var insertfileName  = filename;
        filepost.mv(filemovepath + '/' + insertfileName, function (error) {
            if (error) {
                console.error(error.message);
                return;
            }
        });

    });

    var fullpath = path + '/' + filename;
    var fullpathwithfilename = fullpath.slice(8);
    callback(fullpathwithfilename);
}



/*
==================================================
send SMS
==================================================  
*/

global.sendSMS = function (msg, mobile) {
   
    otpUrl = "https://webpostservice.com/sendsms_v2.0/sendsms.php?apikey=YXlvZGh5YWRhOlhFSk9JRktC&type=TEXT&mobile=" + mobile + "&sender=ADAAYO&message=" + msg;

    var options = {
        url: otpUrl
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    axios(options, callback);
}

