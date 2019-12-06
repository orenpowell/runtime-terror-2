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
  
  app.get('/AllEvents/:id?', (req, res) => {
    const user = req.params.id ? `"${req.params.id}"` : null;
    console.log(user);
    
    con.query(`CALL GetEvents(${user});`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })

  app.get('/AllMarketPlace/:id?', (req, res) => {
    
    con.query(`CALL GetMP();`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp[0] );
    res.send(resp[0]);
    });

  });

  app.get('/AllConnections', (req, res) => {
    
    con.query(`SELECT * FROM Connections;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp[0] );
    res.send(resp[0]);
    });

  });

  app.get('/Housing/House/:id?', (req, res) => {
    
    con.query(`CALL GetHouses()`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })

  app.get('/Housing/Roommate/:id?', (req, res) => {
    
    con.query(`SELECT * FROM Housing;`, (err,resp,fields) => {

			if(err) throw err;
     
    
    console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })


  app.get('/AllGroups/:id?', (req, res) => {
    const user = req.params.id ? `"${req.params.id}"` : null;
    console.log(user)
    
    con.query(`Call GetGroups(${user});`, (err,resp,fields) => {

			if(err) throw err;
     
    
    //console.log(`Connection made`, resp );
    res.send(resp[0]);
    });

  })



  
  app.get('/Top10/:table', (req, res) => {
    const user = req.params.id ? `"${req.params.id}"` : null;
    const route = req.params.table;
    
    con.query(`Call top${route}();;`, (err,resp,fields) => {

      if(err) throw err;
      
    res.send(resp[0]);
    });

  })


  app.get('/Join/:table/:id/:user', (req, res) => {
    const user = req.params.id ? `"${req.params.id}"` : null;
    const route = req.params.table;
    const query = req.params.table === "Events" ? `Insert into MyEventsStudent values( ${req.params.id}, "${req.params.user}")` : 
                                                `Insert into studentInGroups values(${req.params.id}, "${req.params.user}")`;
   
    con.query(`${query};`, (err,resp,fields) => {

      if(err) throw err;
      
    res.send(resp[0]);
    });

  });

  

  app.get('/UnJoin/:table/:id/:user', (req, res) => {
    const user = req.params.id ? `"${req.params.id}"` : null;
    const route = req.params.table;
    const query = req.params.table === "Events" ? `Delete from MyEventsStudent where eventid =${req.params.id} and studentId = "${req.params.user}"` : 
                                                `Delete from studentInGroups where groupId = ${req.params.id} and studentId = "${req.params.user}"`;
   
    con.query(`${query};`, (err,resp,fields) => {

      if(err) throw err;
      
    res.send(resp[0]);
    });

  });

  app.post('/setup/student/:id',(req,res)=>{

    const body = req.body;
    
    console.log(req.body);
	
		con.query(`call NewStudentForm("${body.student_id}", "${body.first_name}", "${body.last_name}", "${body.grad_year}", "${body.dob}", "${body.gender}", ${null}, "${body.roommate_Search}", "${body.hometown}", "${body.Relationship}", "${body.Party}", "${body.smoke}", "${body.drink}", "${body.degree}", "${body.religion}" )`, (err,res,fields) => {

			if(err) throw err;

			console.log(res);
		});
	
	


});


app.post('/create/group/:id',(req,res)=>{

  const body = req.body;
  console.log(req.body);
  

  // con.query(`${query};`, (err,resp,fields) => {


  //   if(err) throw err;

  //   console.log(res);
  // });




});

app.post('/create/event/:id',(req,res)=>{

  const body = req.body;
  console.log(req.body);
  

  // con.query(`${query};`, (err,resp,fields) => {


  //   if(err) throw err;

  //   console.log(res);
  // });




});

app.post('/create/house/:id',(req,res)=>{

  const body = req.body;
  console.log(req.body);
  

  // con.query(`${query};`, (err,resp,fields) => {


  //   if(err) throw err;

  //   console.log(res);
  // });




});

app.post('/create/item/:id',(req,res)=>{

  const body = req.body;
  console.log(req.body);
  

  // con.query(`${query};`, (err,resp,fields) => {


  //   if(err) throw err;

  //   console.log(res);
  // });




});


  app.listen(3001,()=>{
    console.log("Port 3001");
  })