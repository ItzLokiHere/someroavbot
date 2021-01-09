module.exports = {
    name: 'userinfo',
    description: 'user command',
    usage: '<?> or <user>',
    execute(message, args){
        const Discord = require('discord.js')

        const moment = require('moment')
        require('moment-duration-format')

        let user = message.mentions.users.first() || message.author 

        let userinfo ={}
        userinfo.avatar = user.displayAvatarURL()
        userinfo.name = user.username
        userinfo.discrim = `#${user.discriminator}`
        userinfo.id = user.id
        userinfo.status = user.presence.status
        userinfo.registered =  moment.utc(message.guild.members.cache.get(user.id).user.createdAt).format('dddd, MMMM Do, YYYY')
        userinfo.joined = moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('dddd, MMMM Do, YYYY')

        const userembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField(`Username: `,`${userinfo.name}`, true)
        .addField(`Discord tag:`,`${userinfo.discrim}`, true)
        .addField(`ID: `, userinfo.id,true)
        .addField(`Status: `, userinfo.status, true)
        .addField(`Registered account date: `, userinfo.registered, true)
        .addField('Join date: ', userinfo.joined, true)
        .setColor("BLACK")
        .setTimestamp()

        message.channel.send(userembed)



    }

}