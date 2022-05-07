const events = require('./events')

module.exports = {
    name: 'Ban utilisateur',
    description: 'Bannissement d\'un utilisateur avec raison du bannissement',
    banUser: (msg) => {
        if(!msg.member.permissions.has("BAN_MEMBERS"))
            return events.invalidCommand(msg)
        if(!msg.guild.me.permissions.has("BAN_MEMBERS"))
            return events.invalidBotPermissions(msg)

        const member = msg.mentions.users.first()
        if(member){
            let target = msg.guild.members.cache.get(member.id)
            const reason = msg.content.split(" ").slice(2).join(' ') || "Aucune raison spécifiée"
            target.ban({reason})

            target = member.username
            msg.channel.send(`L'utilisateur ${target} a bien été ban pour le motif suivant : ${reason}`)
        }else{
            msg.channel.send("Vous n'avez pas mentionné le personnel pour la prochaine mise en orbite")
        }
    },

    name: 'Mise en orbite',
    description: 'Décollage de la future mission Soyouz',
    Soyouz: (msg) => {
        const messages = [
            `Départ de la future mission spatiale sur ordre de ${msg.author}`,
            `Préparation du lancement`,
            `Allumage des moteurs`,
            `5`,
            `4`,
            `3`,
            `2`,
            `1`,
            `Décollage`,
            `https://tenor.com/view/rocket-liftoff-takeoff-spacex-space-gif-11007718`
        ]

        for(let i = 0; i < messages.length; i++)
            setTimeout(() => msg.channel.send(messages[i]), 1000)
        module.exports.banUser(msg)

    },
}