const { Client, Intents } = require('discord.js')
require('dotenv').config()

const CLIENT = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    partials: [ "MESSAGE", "CHANNEL" ]
})

CLIENT.on("ready", () => {
    console.log("Crédit social activé.")
    CLIENT.user.setActivity("les citoyens", { type:'WATCHING' })
})

CLIENT.on("messageCreate", (msg) => {
    if(!msg.content.startsWith(process.env.BOT_PREFIX) || msg.author.bot)
        return

    const args    = msg.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const commands = new Map([
        ['ping', () => msg.channel.send("Pong")],
        [],
    ])

    commands.get(command).call()
})

CLIENT.login(process.env.BOT_TOKEN)