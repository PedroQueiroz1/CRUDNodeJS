module.exports = {
  host:"localhost",
  dialect:"mysql",
  username:"root",
  password:"root",
  database:"crud_node",
  define:{
    timestamp: true,
    underscored: true
  }
};




//var mysql = require('mysql');

//var con = function(){
//  return mysql.createConnection({
//    host:'localhost',
//    user:'root',
//    password:'root',
//    database:'crud_node'
//  });
//};

//module.exports = con;