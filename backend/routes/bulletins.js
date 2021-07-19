const express = require("express");
const router = express.Router();
const Bulletin = require('../model/bulletin');
const CheckAuth = require('../middleware/check-auth');
const fs = require('fs');

//express router was imported and is being used to handle HTTP requests

//posting a new bulletin
router.post('',

(req,res,next)=>
{
  const bulletins = new Bulletin(
    {
      userName: req.body.userName,
      //Email: req.body.Email,
      emailAddress: req.body.emailAddress,
      bulletinDetails: req.body.bulletinDetails,
    }
  );

  bulletins.save().then((createdBulletin)=>
  {
    fs.appendFileSync('logfile.txt', createdBulletin.userName+"  posted:  "+createdBulletin.bulletinDetails+"\r\n");
    console.log(createdBulletin);
    res.status(201).json({
      message: 'bulletin successfully created',
      bulletinID: createdBulletin._id
    });
    console.log(bulletins);
  });

});
//retrieving bulletins from the server
router.get('',(req,res,next)=>
{
  Bulletin.find().then((documents)=>{
    res.json(
      {
        message: 'Bulletins retrieved from server successfully',
        bulletins:documents
      });
  });
});
//deleting bulletins from server
router.delete("/:id", (req,res,next)=>
{
  console.log(req,params.id);
  Bulletin.deleteOne({_id: req.params.id})
  .then((result)=>
  {
    console.log("bulletin deleted from DB");
    res.status(200).json({message: "Bulletin deleted from database"});
  });
});

module.exports = router;//exports this file to be used elsewhere using the routes for specific url's



