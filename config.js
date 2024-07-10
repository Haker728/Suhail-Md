const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_39_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJaFlQZ1RRTUtzUm1aUDliM2FXQXk5TlNQd3pqM3RGZXlFbm4wMTNaNDlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzNDMyMjY2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjM2RjlDMjUxMUUyQzBCODIwNzNGMzFFQzVDNzI0MTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MDQ2NzUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjh1ZEFwajhwUi1PaC1DQW95bE9uVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjVlYWY0NjMtODhjZC00YmEyLWFiZjktYTNhYWUyMTAyNzc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDgxLFxuICAgICAgMjUwLFxuICAgICAgMjI0LFxuICAgICAgMTc1LFxuICAgICAgNDMsXG4gICAgICAyNDksXG4gICAgICA1MCxcbiAgICAgIDM1LFxuICAgICAgMTU4LFxuICAgICAgMTAzLFxuICAgICAgMjEzLFxuICAgICAgNTIsXG4gICAgICAyMjMsXG4gICAgICAxNjcsXG4gICAgICAzOSxcbiAgICAgIDcsXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTI2LFxuICAgICAgMTA3LFxuICAgICAgOSxcbiAgICAgIDE3OSxcbiAgICAgIDE5NixcbiAgICAgIDIzMSxcbiAgICAgIDgsXG4gICAgICAxMjYsXG4gICAgICA5OSxcbiAgICAgIDIzLFxuICAgICAgMSxcbiAgICAgIDEwMCxcbiAgICAgIDIyMSxcbiAgICAgIDIyNCxcbiAgICAgIDYwLFxuICAgICAgNDAsXG4gICAgICAyMDksXG4gICAgICAxNTMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVEzTlBYOVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzNDMyMjY2ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwOTgyNTUzMjExMTA1OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1vdmllcyBHcm91cCBBZG1pblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orNTBmc0JFSldYbzdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWTdnUjVRSDkzWVdHS0NlMW82ZzdQZm0yYnh5TjBEU2lYU05vK2daNUJ3Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFSVdwRGZGSUVUZWZ6NGVLU05KRmpqWStFckVPc1NzMzg4VUIrRXN0dWF0RVZaU1E1ZlBsdWowbjhPUWtPL1JnU3ZIN253U00wYUxJaGdKazkyamZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIcHNRYUI4cGFpby9wRnhlR0NJanRxNTczalNVeUxvNUlPTkJIWHpSWm1DSWkzWDhkZGpid1FqeUZva3RKbWFQaGdINTZtZk43L0ZNbHM3RmVuOEVqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMzQzMjI2Njg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwNDY3NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKNjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo2Ny5qc29uIjogIntcImtleURhdGFcIjpcImpwaDJDUk9MdjZLQ1loSFIzOTU0cmtiQlYrNTc5UzRYUWdmUXlhNmdkVU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI3NzE5NTgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwNDY3NDY4MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
