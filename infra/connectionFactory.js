var mysql = require('mysql');

function createDBConnection(){

  return mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'dev$@!11%',
    database: 'animesDB'
  });

};

module.exports = function(){

  return createDBConnection;

}
