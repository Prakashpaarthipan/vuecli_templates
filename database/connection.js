module.exports = {
    hrPool: {
      user: process.env.HR_USER || "trandata",
      password: process.env.HR_PASSWORD || "centra123",
      connectString: process.env.HR_CONNECTIONSTRING || "(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=172.16.0.36)(PORT=1521)))(CONNECT_DATA=(SID=TCSTEST)(SERVER=DEDICATED)))",
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    },
    port: process.env.HTTP_PORT || 3000
  };
 