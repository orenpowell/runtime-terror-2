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

  function connect() {
    con.connect(function(err) {
    if (err) throw err;
  });
}

  promise.then(connect() {
    console.log('connection sucessful');
  });  

query(sql, args) {
  return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
          if(err)
              return reject(err);
          resolve(rows);
      });
  });
}

close() {
  return new Promise((resolve, reject) => {
      this.connection.end( err => {
          if(err)
              return reject(err);
          resolve();
      });
  });
}

  let someRows, otherRows

  con.query(query)
    .then(rows => {
        someRows = rows;
        return database.query(Query);
    })
    .then(rows => {
        otherRows = rows;
        return database.close();
    }, err => {
        return database.close().then(() => { 
          throw err; 
        })
    })
    .then(() => {
        // do something with someRows and otherRows
    }
    .catch(err => {
        // handle the error
    })

    con.execute( config,
      database => database.query(query)
      .then( rows => {
          someRows = rows;
          return database.query(query)
      } )
      .then( rows => {
          otherRows = rows;
      } )
  ).then( () => {
      // do something with someRows and otherRows
  } ).catch( err => {
      // handle the error
  } );

  //function to retrieve data execute query
  //check for parameters first
    //if no parameters prepare statement and execute query
    //else fill in parameters then prepare and execute
  //data needs to be sent back with the then
  //can be done with a promise, sql command call with a then callback
  //returned data will be resp[0]

