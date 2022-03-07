var mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'gdsc_pknu'
});
db.connect();

module.exports = db;