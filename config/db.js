var mysql = require('mysql');

var con = function(){
  return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'crud_node'
  });
};

module.exports = con;