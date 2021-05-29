const app = require('./backend/app');
const http = require('https');
const fs = require('fs');

//const server = http.createServer((req,res)=>
//{
 // res.end("server runnin")
//});



const server = http.createServer({
key: fs.readFileSync('keys/privatekey.pem'),
cert: fs.readFileSync('keys/certificate.pem')
},app);

const port = (process.env.PORT || "3000");
app.set("port", port);
server.listen(port);

