module.exports = {
    name: 'serverinfo',
    description: 'server command',
    execute(message, args){
        const Discord = require('discord.js')

        const moment = require('moment')
        require('moment-duration-format')

        


    const serverembed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .addField("Owner:", message.guild.owner.user.tag, true)
    .addField("ID: ",message.guild.id, true)
    .addField('Members: ', message.guild.memberCount, true)
    .addField("Bots: ",message.guild.members.cache.filter(mem => mem.user.bot === true).size, true)
    .addField("Online: ",message.guild.members.cache.filter(mem => mem.presence.status != 'offline').size, true)
    .addField("Roles: ", message.guild.roles.cache.size, true)
    .addField("Creation date: ", moment.utc(message.guild.createdAt).format('dddd, MMMM Do, YYYY'),true)
    .addField(`Roles list: [${message.guild.roles.cache.size - 1}]`, message.guild.roles.cache.map(r => r).join(" ").replace("@everyone", " "))
    .setColor("BLACK")
    .setTimestamp()

message.channel.send(serverembed)





    }

}

