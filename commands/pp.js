module.exports = {
	name: 'pp',
	description: 'pp a person!',
	execute(message, args) {
        const Discord = require('discord.js')
        const ppsize = Math.floor(Math.random() * 13)

        if(message.author.id === '660694217403662396'){
            message.reply("0 inches, what are you a girl? Oh forgot, your Pat.")
        }else {

        if(ppsize === 1){
            message.reply("1 inch!? That\'s pretty small!")
        }else if(ppsize === 0){
            message.reply("0 inches, what are you a girl?")
        }else if(ppsize === 12){
            message.reply("You got 12 inches...wait").then(m => {
                setTimeout(() => { m.edit("No you got 0 inches! LOL") }, 2000)
            })
            
        }
        else if(ppsize >= 2){
            message.reply(`You got ${ppsize} inches.`)
        
        }
    }
        
        
       
	}
};