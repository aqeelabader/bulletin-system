const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use((reg,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET","POST","OPTIONS","PATCH","DELETE");
  next();
});

app.post('/api/bulletins',(req,res,next)=>{
  const bulletins = req.body;
  console.log(bulletins);
  res.status(201).json({
    message: 'order successfully created'
  });
});





module.exports = app;
