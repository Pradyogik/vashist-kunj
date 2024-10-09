var mysql = require('mysql');
global.username=null;
var config = mysql.createConnection({
  host: "developer.chciq0eeey32.ap-south-1.rds.amazonaws.com",
  user: "vashistha_kunj_user",
  password: "JaiHindBharat$$321##",
  database: "db_vashistha_kunj",
  multipleStatements: true
});

config.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = config;