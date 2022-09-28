
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({

token: "MTAyNDQ1ODU4MzQ2ODkzNzI4Nw.GMIzpC.vZSdj6Fl0PA-MMmUiS-s0pP9yhYQd3a4XLlstI",

prefix: "r!",

intents: 'all',

intents: ["GUILDS", "GUILD_MESSAGES"]

}) 

bot.variables({

  variavelexemplo: "valordela",

})

bot.onInteractionCreate();

bot.status({

  text: "𝗔𝗻𝗶𝗺𝗲𝘀",

  type: "Assistindo",

  time: 12

})

bot.onMessage()

const loader = new aoijs.LoadCommands(bot)

loader.load(bot.cmd,"./commands/")

bot.readyCommand({

    channel: "",

    code: `$log[Estou Pronto!, conectado como: $userTag[$clientID]]`

}) 

