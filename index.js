// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import db from "./database/oracleservice";

const database = require("./database/oracleservice.js");
const dbConfig = require('./database/connection.js');
const webServer = require("./server/server.js");




;
/* jshint ignore:start */
async function startup() {
    console.log('Starting application');
     try {
      console.log('Initializing database module');
  
      await database.initialize(); 
    } catch (err) {
      console.error(err);
  
      process.exit(1); // Non-zero failure code
    }
    
    // *** existing try block in startup here ***
    try {
      console.log('Initializing web server module');
   
      await webServer.initialize();
    } catch (err) {
      console.error(err);
   
      process.exit(1); // Non-zero failure code
    }
  }
  startup();
  
const defaultThreadPoolSize = 4;

// Increase thread pool size by poolMax
process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;

async function shutdown(e) {
  let err = e;
    
  console.log('Shutting down');
 
  try {
    console.log('Closing web server module');
 
    await database.close();
  } catch (e) {
    console.log('Encountered error', e);
 
    err = err || e;
  }
 
  try {
    console.log('Closing database module');
 
    await database.close(); 
  } catch (err) {
    console.log('Encountered error', e);
 
    err = err || e;
  }

  console.log('Exiting process');
 
  if (err) {
    process.exit(1); // Non-zero failure code
  } else {
    process.exit(0);
  }
}
 
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
 
  shutdown();
});
 
process.on('SIGINT', () => {
  console.log('Received SIGINT');
 
  shutdown();
});
 
process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);
 
  shutdown(err);
});


/* jshint ignore:end */
