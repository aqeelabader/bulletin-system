const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const bulletinRoutes = require('./routes/bulletins');
const userRoutes = require('./routes/user');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {server:{sslCA: cert}};
const app = express();
const Bulletin = require('./model/bulletin');

//Database connection
mongoose.connect("mongodb+srv://aq-admin:z6KJH6eXvmxWXluI@cluster0.wsp80.mongodb.net/bulletin-system?retryWrites=true&w=majority")
.then(()=>
{
    //fs.appendFileSync('logfile.txt', "connedted to database successfully");

  console.log("connected to db successfully")
}).catch(()=>
{
  console.log('apparently not')
},options);

app.use(bodyParser.json())
//setting CORS
app.use((reg,res,next)=>
{
 res.setHeader("Access-Control-Allow-Origin", '*');
 res.setHeader("Access-Control-Allow-Headers",
 "Origin ,X-Requested-With,Content-Type,Accept,Authorization"
 );
 res.setHeader("Access-Control-Allow-Methods",
 "*");
 next();
});

//routing
app.use("/api/bulletins", bulletinRoutes);
app.use("/api/user",userRoutes);

module.exports = app;
