import mysql from 'mysql'
var connection = mysql.createConnection({
  host     : 's4sprint2restapi.cbkweywzlhmm.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'C0ding!sH!p21',
  database : 'S4_Sprint_RestApi'
});
 
// connection.connect();
 
// connection.query('SELECT * FROM car', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0]);
// });
 
// connection.end();

// module.exports = connection