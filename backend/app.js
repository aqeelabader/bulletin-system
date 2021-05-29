const express = require('express');

const app = express();

app.use('/api/bulletins',(req,res,next)=>{
  const bulletins = [
    {
      id: "2jofunisr3od",
      userName: "molly_001",
      emailAddress: "molly@sales.com",
      bulletinDetails: "cheese cake from server"
    },

    {
      id: "2jofunisr3od",
      userName: "molly_002",
      emailAddress: "molly@sales.com",
      bulletinDetails: "lemon pie from server"
    },
  ];
  res.json(
    {
      message: 'orders retrieved successfully',
      bulletins:bulletins

    }
  );
});

module.exports = app;
