const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../model/user');

router.post("/signup",(req,res,next)=>
{
  bcrypt.hash(req.body.password,10)
  .then(hash =>
    {
      const user = new User(
        {
          username: req.body.username,
          emailaddress: req.body.emailaddress,
          password: hash
        });

        console.log(req.body.password, req.body.emailaddress, req.body.username);
        user
        .save()
        .then(result =>
          {
            res.status(201).json(
              {
                message: "user created successfully",
                result: result
              });
          })
          .catch(err =>
            {
              res.status(500).json(
                {
                  error: err
                });
            });
    });
});

module.exports= router;

