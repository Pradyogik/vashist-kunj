/*======================================
Include file section
========================================*/
var createError     = require('http-errors');
var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var logger          = require('morgan');
const session       = require('express-session');
var flash 	        = require('connect-flash');
let nocache = require('node-nocache');
const MySQLStore = require('express-mysql-session')(session);
var upload  = require('express-fileupload');

/*
const options = {
  host: "developer.chciq0eeey32.ap-south-1.rds.amazonaws.com",
  user: "vashistha_kunj_user",
  password: "JaiHindBharat$$321##",
  database: "db_vashistha_kunj",
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'id',
      expires: 'expires',
      data: 'data'
    }
  }
};
const store = new MySQLStore(options);
*/


var app = express();
/*=============================================
Session maintain for a day
==============================================*/
var flash 	= require('connect-flash');

//session
const oneDay = 1000 * 60 * 60 * 24;
//session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    //store: store
}));
// Use nocache middleware to prevent caching
app.use(nocache);
app.use(cookieParser());

app.use(flash());
/*======== End Session Maintain ==============*/
/*=========Template Engin Section=============*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*===========================================*/


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(upload());
app.use("/uploads",express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

/*==============================================
Router Section
===============================================*/
var frontendRoute  = require('./routes/frontendRoute');
var adminRoute     = require('./routes/adminRoute');

app.use('/', frontendRoute);
app.use('/admin', adminRoute); 

/*============= END Router=====================*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(5005,'0.0.0.0',function(){
	console.log('Server is running port:5005');
});

module.exports = app;