//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kelvinonginjo39@gmail.com";
global.location = "Kenya, Nairobi";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/jinwiil49";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tXQzdoYmY4M0RjSk44a1VuUGZaanRxVTlSbzBTRS9IOTg0ckNwcnYwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTFUQW1QSUpUTXgwUEQ3V0EwT2lldHVWMWxUQUF1azFrNjRvcGRzanZ6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSUJqOEJQN3FrNjA2TGdET2tYbW5ib3hSbFJaM002OHkxUGR2eWJIS1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUUdTamRYYXc4YWR0UnFYRTJGVWRaM2JsL0p4VGdXK1ZzM1lDK2dXK25vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOR1V1YUNLdzJkYWdSRXlLR0NqNVlPak1IcEtLajI5a3pERG1ndFZSWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCcXl2dlM2d1ZLdkdPaWpSblVpSFVPd1U2b2VqN01aQUhhdEpJNTZ2VFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFB6MENKZEUrcUh0K00rRHJ3KzN5NkR3N1VZaTd3cjRNMDQrUHZxUm5IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3kxZkkrRit4ZGVoUUQrNW1DY015MURWY1gydmtWMGNlV2tSdXhMcTNpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU0Ym50Q1hVQml4YkFGNWRBdTdpc2drU00ycmhjS2lwTXIzSVFUVEdUTnd0TnBDVXJQY1YwY1NtRDZXU1ordi9GT2tERCtiTnZ2TXovZDBRWjdPOEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJHNGMvVlJrMzhVZTBuTHM0NDQwbHN4YnpTT3RwL3pVV3IxQVQ5TXh2N21ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTM2NTYxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MjU3RDg1MjVCNjM3RjYxQkM0RTdEMzFCQTREMDJEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NTA0MDc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWbkJIZGlmb1EyYVphZklOZlZ1UzlRIiwicGhvbmVJZCI6IjVhMTI3OGFhLTY4OTMtNDI1OC1hMmNlLTFmZjc4NmQyZDdmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySEhreVlmVDI5QkpiUG9YcldCMWVEZFkvbEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWtkS3FhbDFUdmtaVitzYVI0Ly91YzEybm04PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFGSlNUTE1IIiwibWUiOnsiaWQiOiIyNTQ3NjkzNjU2MTc6MTNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUZi9KMEJFUHJCbTdnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlzODdoRkFGbmhLVmxQbEtrTDJyOVI4Nm5lUXAvMUU2RXhWR2VKQ3cybXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRXYUlmRGlqRGFMVXA1My9GeXNJSlpsNTQxcmp1VXI5MEs1ZXo4R2h4RkdwS2hHeEJvRDdTMTBGSFVGenFrVG1lWmtHZFRlS1ltcUVoc1RuZUdBU0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIeEhCT0s2dTc3R0R0UXJUZlBmSElXL0c5bGxjdTBaSEk3MWZkVUpvNGZYSW5QcDMzeGRYZXk3KzE2N0FoWkVramp0eEt1eFBObHdUU3B3UGlkYmJEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2OTM2NTYxNzoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmYlBPNFJRQlo0U2xaVDVTcEM5cS9VZk9wM2tLZjlST2hNVlJuaVFzTnBzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTA0MDczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVAyMSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`King_Jin-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Jinwiil",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
