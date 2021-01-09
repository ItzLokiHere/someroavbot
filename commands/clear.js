module.exports = {
    name: 'clear',
    description:'clear command',
    args:true,
    usage: '<amount>',
    execute(message, args){
        const Discord = require('discord.js')

        var lackembed = new Discord.MessageEmbed() // If player is not admin
            .setTitle("Permission Error")
            .setDescription("You don\'t have permission to use that command")
            .setColor("BLACK")
            .setFooter("Velure Moderation")
            .setTimestamp()

        if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send(lackembed).then(lackembed => {

            lackembed.react("❌")
        })
        
        message.channel.bulkDelete(args[0])

    }
}