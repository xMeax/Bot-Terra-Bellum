module.exports = {
    name:"Commande invalide",
    description:"Trigger quand un utilisateur n'a pas les permissions",
    invalidCommand: (msg) => {
        msg.channel.send(`${msg.author} n'a pas la permission d'utiliser cette commande`)
    },

    name:"Droits invalides",
    description: "Il manque des permissions au bot afin d'effectuer cette action",
    invalidBotPermissions: (msg) => {
        msg.channel.send(`${msg.guild.me} n'a pas la permission d'effectuer cette action`)
    }
}