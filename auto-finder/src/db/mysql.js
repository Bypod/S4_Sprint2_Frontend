// var mysql      = require('mysql');
import mysql from 'mysql'

//connecting to mysql
var connection = mysql.createConnection({
  host     : 's4sprint2restapi.cbkweywzlhmm.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'C0ding!sH!p21',
  database : 'S4_Sprint_RestApi'
});


module.exports = connection

// var dbInfo = []
 
// connection.connect();
 
// connection.query('SELECT * FROM car', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
//   dbInfo = results
//   return dbInfo
// });

 
// connection.end();

// export default  dbInfo/* {connection.query('SELECT * FROM car', function (error, results, fields) {
//     if (error) throw error;
//     <p>{results}</p>
//   })} */