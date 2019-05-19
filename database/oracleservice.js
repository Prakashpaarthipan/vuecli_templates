const oracledb =require('oracledb');
const dbConfig = require('./connection.js');

/*
oracledb.getConnection({    
    user: 'trandata',
    password: 'centra123',
    // connectionString: '(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = server)(PORT = 1521)))(CONNECT_DATA = (SERVICE_NAME = db1))'
    connectString: '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.16.0.36)(PORT=1521)))(CONNECT_DATA=(SID=TCSTEST)(SERVER=DEDICATED)))'
    // connectionString: 'db1'
}).then(connection => {
    console.log('Got connection!');
    connection.execute("select count(*) from av7_release_entry",function(err,result){
                if(err){
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows);
                //doRelease(connection);
            });
})
.catch(err => {
    console.log(err);
});*/
/* jshint ignore:start */
async function initialize() {
    const pool = await oracledb.createPool(dbConfig.hrPool);
  }
  
  module.exports.initialize = initialize;
  
  async function close() {
    await oracledb.getPool().close();
  }
  
  module.exports.close = close;

   function test(){
            //oracledb.getConnection(dbConfig,function(err, connection){
                oracledb.getConnection();

          
             
                oracledb.getConnection().then(conn =>{
                    conn.execute("select user, systimestamp from dual",function(err,result){
                if(err){
                    console.error(err.message);
                    doRelease(conn);
                    return;
                }
                console.log(result.rows);
                doRelease(conn);
            });
        });
     
  }

module.exports.test = test;

function doRelease(connection){
    connection.close(function(err){
        if(err){
            console.error(err.message);
        }
    });
}

//console.log(oracledb);
/* jshint ignore:end */