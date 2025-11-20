const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "HtpS2R6I#QGWjTCFxWIEu6mvUpU601-iZzxg23i4KGQ2MsPsz6sk",
  MONGODB: process.env.MONGODB || "mongodb+srv://shadowxmd2_db_user:f2MowJLaDfSbUHYe@cluster0.dozzrxd.mongodb.net/?appName=Cluster0",
  OWNER_NUM: process.env.OWNER_NUM || "94764040298",
};
