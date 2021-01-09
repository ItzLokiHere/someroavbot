module.exports = {
    name: 'help',  
        description: 'help command',
        execute(message, args){
            const Discord = require('discord.js');
            

            const helpembed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .addField("User commands: ", "\n :ping_pong: v!ping \n :information_source:  v!help  \n :bust_in_silhouette: v!userinfo \n :busts_in_silhouette: v!serverinfo",true)
            .addField("Admin commands: ", "\n :x: v!kick \n :no_entry: v!ban ",true)
            .addField("Fun commands: ", "\n  :regional_indicator_p: v!image", true)
            .setColor('BLACK')
            
            message.author.send(helpembed)
            message.reply(`check your **DMs**`)
        
        }
}