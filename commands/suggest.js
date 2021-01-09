module.exports = {
	name: 'suggest',
    description: 'suggest a thing!',
    args: true,
    usage: '<object>',
	execute(message, args) {
        const Discord = require('discord.js')
        const bot = new Discord.Client()
        let msgArgs = args.slice(0).join(" ")
        
        let embeds = new Discord.MessageEmbed()
        .setTitle("Suggestion")
        .setDescription(msgArgs)
        .setFooter(`Created by ${message.author.tag}. Vote now!`)
        .setTimestamp()
        .setColor("BLACK")

        message.guild.channels.cache.get('797486928899473466').send(embeds).then(embeds => {
            embeds.react("⬆️")
            embeds.react("⬇️")
        })

        message.author.send("Your suggestion has been submited in #suggestions. Thanks!")
       
	}
};  