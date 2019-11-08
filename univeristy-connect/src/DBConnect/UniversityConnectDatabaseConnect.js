const bodyParser=require('body-parser');
const cors=require('cors');
const promise = require('promise');

const mysql = require('mysql');

var con = mysql.createConnection({
    host: "uniconnectdb.cqnluwv4ywov.us-east-1.rds.amazonaws.com", // ip address of server running mysql
    port: '3306',    
    user: "uniconnectadmin", // user name to your mysql database
    password: "uniconnect56!", // corresponding password
    database: "universityconnect" // use the specified database
  });

function promise

function connect() {
    con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
   console.log('connection successful');
  });
}

  //function to retrieve data execute query
  //check for parameters first
    //if no parameters prepare statement and execute query
    //else fill in parameters then prepare and execute
  //data needs to be sent back with the then
  //can be done with a promise, sql command call with a then callback
  //returned data will be resp[0]

