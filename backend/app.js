const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {server:{sslCA: cert}};
const app = express();
const Bulletin = require('./model/bulletin');

mongoose.connect("mongodb+srv://aq-admin:z6KJH6eXvmxWXluI@cluster0.wsp80.mongodb.net/bulletin-system?retryWrites=true&w=majority")
.then(()=>
{
  console.log("connected to db successfully")
}).catch(()=>
{
  console.log('apparently not')
});


app.use(bodyParser.json())

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

app.post('/api/bulletins',(req,res,next)=>
{
  const bulletins = new Bulletin(
    {
      userName : req.body.userName,
      emailAddress: req.body.emailAddress,
      bulletinDetails: req.body.bulletinDetails

    }
    );

  bulletins.save();
  console.log(bulletins);
  res.status(201).json({
    message: 'order successfully created'
  });
});


app.get('/api/bulletins',(req,res,next)=>{
  Bulletin.find().then((documents)=>{
    res.json({
      message: 'bulletins retrieved from server successfully',
      bulletins:documents
    });
  });
});


module.exports = app;
