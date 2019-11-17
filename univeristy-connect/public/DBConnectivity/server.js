const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const mysql = require('mysql');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


var con = mysql.createConnection({
    host: "uniconnectdb.cqnluwv4ywov.us-east-1.rds.amazonaws.com", // ip address of server running mysql
    port: '3306',    
    user: "uniconnectadmin", // user name to your mysql database
    password: "uniconnect56!", // corresponding password
    database: "universityconnect" // use the specified database
  });


  con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
   console.log('connection successful');
  });

  app.get('/', (req, res) => {
    if(err) throw err;
    
    res.send('ok');
  });

  app.get('/userValidation',(req,res)=>{
    const credential = req.header('authorization').split(" ").slice(1)[0];
    console.log(credential);
    con.query(`call validate_user('${credential}');`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp[0] );
    res.send(resp[0]);
    });
   
  })
  
  app.get('/AllEvents', (req, res) => {
    
    con.query(`SELECT * FROM AllEvents;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    //console.log(`Connection made`, resp );
    res.send(resp);
    });

  })

  app.get('/AllGroups', (req, res) => {
    
    con.query(`SELECT * FROM AllGroups;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp[0] );
    res.send(resp[0]);
    });

  })

  app.get('/AllGroups', (req, res) => {
    
    con.query(`SELECT * FROM AllGroups;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })

  app.get('/housing/homes', (req, res) => {
    
    con.query(`SELECT * FROM Housing;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })


  app.get('/housing/roommates', (req, res) => {
    
    con.query(`SELECT * FROM Housing;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp[0] );
    res.send(resp[0]);
    });

  })

  // app.post('/',(req,res)=>{

  //   console.log(req);
	
	// 	con.query("select * from Students", (err,res,fields) => {

	// 		if(err) throw err;

	// 		console.log(res);
	// 	});
	
	


// })

  app.listen(3001,()=>{
    console.log("Port 3001");
  })