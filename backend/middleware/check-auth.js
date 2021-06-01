const jwt = require('jsonwebtoken');
//this is supposed to verify the token
module.exports=(req,res,next)=>
{
  try
  {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,"secret_this_should_be_longer_time_is")
    console.log("token verified success");
    next();
  }
  catch
  {
    res.status(401).json({
      message:"middleware auth fail no valid token set"
      });
  }
};
