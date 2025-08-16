const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~X1BRFKAJ#CeV3UAefylJ2Kdiyzg403ZY-GUeILH9io0Ebfc7UtwY"
global.mongodburi = process.env.MONGODB_URI || ""
global.botname = process.env.BOTNAME || "Rana-Awais MD"
global.ownernumber = process.env.OWNERNUMBER || "94766577249"
global.ownername = process.env.OWNERNAME || "Rana-Awais"
global.packname = process.env.PACKNAME || "Rana-Awais MD"
global.author = process.env.AUTHOR || "Cyber Kavi"

global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/KQYXA9CRntzKAJXGyTItjf?mode=ac_t"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
