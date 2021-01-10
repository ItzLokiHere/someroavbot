module.exports = {
    name: 'help',  
        description: 'help command',
        execute(message, args){
            const Discord = require('discord.js');
              
            const helpembed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .addField("User commands: ", "\n :ping_pong: ping \n :information_source: help  \n :bust_in_silhouette: userinfo \n :busts_in_silhouette: serverinfo",true)
            .addField("Admin commands: ", "\n :x: kick \n :no_entry: ban ",true)
            .addField("Fun commands: ", "\n  :regional_indicator_p: image", true)
            .addField("Roblox commands: ", "\n 🌚 lookup ",true)
            .setColor('BLACK')
            .setFooter("My prefix is: v!")
            
            message.author.send(helpembed)
            message.reply(`check your **DMs**`)
        
        }
}