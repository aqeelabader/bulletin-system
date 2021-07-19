const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require('../model/user');
const ExpressBrute = require('express-brute');
const fs = require('fs');

//express router was imported and is being used to handle HTTP requests


//the two lines below are just to prevent brute force attacks
const store = new ExpressBrute.MemoryStore();
const bruteforce= new ExpressBrute(store);

//signing up a new user
router.post("/signup",(req,res,next)=>
{
  bcrypt.hash(req.body.password,10)//hashing the password for security
  .then(hash =>
    {
      const user = new User(
        {
          username: req.body.username,
          email: req.body.email,
          password: hash
        });

        console.log(req.body.password, req.body.email, req.body.username);
        user
        .save()//saves the user
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
                  error: err//checking to see if user is saved properly
                });
            });
    });
});

//logging users in
router.post("/login",bruteforce.prevent, (req,res,next)=>
{
  let fetchedUser;

  User.findOne({email:req.body.email})//finds the user based on email
  .then(user=>{
    console.log(user);
    if(!user)
    {
      fs.appendFileSync('logfile.txt', "There has been an authentication error\r\n");
      return res.status(401).json(
        {
          message: "Authentication Failed, Please try again"
        });
    }
    fs.appendFileSync('logfile.txt', "User has successfully logged in\r\n"+"Logged in user : "+req.body.email+"\r\n");
    fetchedUser= user;
    return bcrypt.compare(req.body.password,user.password)//compares the password against the saved password for that user
  })
  .then(result=>
    {
      console.log("2",result);
      if(!result)
      {
        fs.appendFileSync('logfile.txt', "There has been an authentication error\r\n");
        return res.status(401).json({message: "Authentication Failure"});
      }

      const token = jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},
        'secret_this_should_be_longer_time_is',
        {
          expiresIn:'1h'//sets the auto expire for token
        });
        console.log(token);
        res.status(200).json(
          {
            token:token
          });
    })
    .catch(err=>
      {
        fs.appendFileSync('logfile.txt', "There has been an authentication error\r\n");
        console.log(err);
        return res.status(401).json(
          {
            message:"Authentication Failure"//catching any other error related to auth
          });
      })
});

module.exports= router;//exports this file to be used elsewhere using the routes for specific url's

