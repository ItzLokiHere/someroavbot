module.exports = {
	name: 'invite',
	description: 'invite a person!',
	execute(message, args) {
        message.channel.send(`${message.author}, check your DMs!`)
        const Discord = require('discord.js')
        const embedinv = new Discord.MessageEmbed()
        .setTitle("Invite for the bot.")
        .setAuthor("Click me for the link!","","https://discord.com/api/oauth2/authorize?client_id=797245422225719336&permissions=8&scope=bot")
        .setTimestamp()
        .setColor("BLACK")
        message.author.send(embedinv)
        
        
       
	}
};