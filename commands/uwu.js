module.exports = {
	name: 'uwu',
    description: 'uwu some text',
    args: true,
    usage: '<text>',
	execute(message, args) {
        const Discord = require('discord.js')
        const uwu = require('uwu-js');

        let text = args.slice(0).join(" ")

        message.channel.send(`Transforming your text to uwu...`).then(message => {
            setTimeout(() => {
                message.edit(`**${uwu(text)}**`)
            }, 3000);
        })

        

        
        
       
	}
};






