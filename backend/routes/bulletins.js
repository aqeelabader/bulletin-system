const express = require("express");
const router = express.Router();
const Bulletin = require('../model/bulletin');
const CheckAuth = require('../middleware/check-auth');

router.post('',
CheckAuth,
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
    console.log(createdBulletin);
    res.status(201).json({
      message: 'bulletin successfully created',
      bulletinID: createdBulletin._id
    });
    console.log(bulletins);
  });

});

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

router.delete("/:id",CheckAuth, (req,res,next)=>
{
  console.log(req,params.id);
  Bulletin.deleteOne({_id: req.params.id})
  .then((result)=>
  {
    console.log("bulletin deleted from DB");
    res.status(200).json({message: "Bulletin deleted from database"});
  });
});

module.exports = router;

