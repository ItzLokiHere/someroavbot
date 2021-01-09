module.exports = {
	name: 'suggest',
    description: 'suggest a thing!',
    args: true,
    usage: '<object>',
	execute(message, args) {
        const Discord = require('discord.js')
        const bot = new Discord.Client()
        let suggestChannel = bot.channels.cache.get('797486928899473466')
        let msgArgs = args.slice(0).join(" ")
        
        let embeds = new Discord.MessageEmbed()
        .setTimestamp("Suggestion")
        .setDescription(msgArgs)
        .setFooter(`Created by ${message.author.tag}. Vote now!`)
        .setTimestamp()
        .setColor("BLACK")

        suggestChannel.send(embeds).then(embeds => {
            embeds.react(":arrow_up:")
            embeds.react(":arrow_down:")
        })

        message.channels.send("Your suggestion has been submited in #suggestions. Thanks!")
       
	}
};