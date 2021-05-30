const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Bulletin = require('./model/bulletin');
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
  const bulletin = new Bulletin(
    {
      userName : req.body.userName,
      emailAddress: req.body.emailAddress,
      bulletinDetails: req.body.emailAddress

    }
    );


  console.log(bulletins);
  res.status(201).json({
    message: 'order successfully created'
  });
});





module.exports = app;
