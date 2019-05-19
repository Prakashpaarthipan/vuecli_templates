const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const database = require("../database/oracleservice.js");
const dbConfig = require('../database/connection.js');
const http = require('http');
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({
        message:"Hello world from prakash"
    });
})

let httpServer;
 
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

      // Combines logging info from request and response
    // app.use(morgan('combined'));
    // app.use('/api', router);

     //Testing Purpose added here
     app.get('/', function(req, res) {
      const result = database.test();
      console.log(JSON.stringify(result,true));
      //console.log(result.rows[0]);
      
    });
 
    httpServer.listen(dbConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }
 
      console.log(`Web server listening on localhost:${dbConfig.port}`);
 
      resolve();
    });
  });
}
module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}