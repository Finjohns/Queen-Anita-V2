//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUYyZzljTmlyOXRrWmVZNXIyNllDa3d1OTlwdktiL2ZjUnVkQktuTDdIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYy9VRytzei9WMWs0dFBETG0yMWdrQkw0OERxbldiWWxGV1VyN3B0MEppYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTmhETGFpRHJ5ZnVEQmZCOU83bkliUjRHeHNRQnBmeVM3ZFZJMkJ5QVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MTMwcDR0ZHZoVSs2cUs2RjFFdDdIMHVGaWNYTGpBdWliVUliOEZSVTFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJVGJvY0tHaGUrcUZ2czZrR3llVFp4TXlpWCs3L3pPNGhVeFNzOVhmVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BdzN3L3piWkVWVk51OEJ4TDY1VWJ3S3d6Y01XNUFHRncxcnJxVFZlM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxGQzFUajVncWxSTFAxeGttOXUzbEVsTnExOXQ2UmNGcm10YVlRdEdVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNDcExLcDhYT2JoWUx2bncxaW94eEpCdWdjelB4WVBjY2NNeGRjSXFCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKbXBuTmxzRUNHVHA3bkQwSnlsc0pWUENSeWVpRTRlT2ZZeFQxMlQraGdEQ0tMQTZ4dDc1MndsakNoUTZKN2RLYmptVEpFcFFtdXd1NnlGZjhJUGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJvZFJBZURqdU83V1FNQW0wLzMrNmtiYmpYWllxTklaVmZzZEVKdE9UdTgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTM2NTYxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNTI0NEM5NTM3OTY0MThGRjk4OUMyQTJBQzhCNjgyNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MjUwNzc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NjkzNjU2MTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjg5QTIxMEYyQzhGNkNCRDk0MjU2NjJGNDgzQjYyRUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODI1MDc5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzY5MzY1NjE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI3REU2MzBEQkNFQjRDRDc0NjdDRkQxQTIyMTJCOUQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgyNTA4MDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpZT2NUUThJVFBtT1p2N3RHbnpQb2ciLCJwaG9uZUlkIjoiOTAxM2FkMmQtMGQ4Ni00NGFmLTkwOWEtNmQ3NDk1N2U4ZGQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMrdmRxM3Q4dy9FbkZiQi9XS042bEJaaGdzST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnN09DWXRLbFpnOHZQRW16SmtEL1M4Q1VYSkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlhINEZBTDgiLCJtZSI6eyJpZCI6IjI1NDc2OTM2NTYxNzo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkrFguKCpuKCqcWCxYLisaAg8J+Vt++4jyDDmOKCpuKCssWC4oKmSsOY8J+VuO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhmL0owQkVJcUhqTGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXM4N2hGQUZuaEtWbFBsS2tMMnI5Ujg2bmVRcC8xRTZFeFZHZUpDdzJtdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRWo0OEFUU0thVkx0eFdTMStzdHRFbWdMM2NNUEZ5SHhuOXRuaDRUbkxEQ2Z4R2R0Z0NhYTkvR08yM2d6TUxxVFBPOGpWM3FUdU5FeGxsQjMzN3dzQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImV2TE5FdTdad25neEE0dlJXbW44MVl0WGVrZEFYRUxSTXFza2lGbVRHMC9Wdmw1ZkRPdGV4RzJtYi9Dekg3bjhKRkFFSHAxbWFJN21mdEhzOStPamlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5MzY1NjE3OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJQTzRSUUJaNFNsWlQ1U3BDOXEvVWZPcDNrS2Y5Uk9oTVZSbmlRc05wcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODI1MDk3NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQMjYifQ=="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
