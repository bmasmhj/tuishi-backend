const mysql = require('mysql2');

const database = mysql.createConnection({
  host     : 'host',
  user     : 'usename',
  password : 'pw',
  database : 'db'
});

database.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + database.threadId);
});

function pingdb() {
  var sql_keep = `SELECT 1 + 1 AS solution`; 
  database.query(sql_keep, function (err, result) {
    if (err) throw err;
    console.log("Ping DB");
  });
}
setInterval(pingdb, 40000);
module.exports = {database};
