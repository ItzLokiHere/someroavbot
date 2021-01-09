
module.exports = {
    name: 'kick',
    description:'kick command',
    args: true,
    usage: "<user>",
    execute(message, args){
        const Discord = require('discord.js')

        const lackembed = new Discord.MessageEmbed()
            .setTitle("Permission Error")
            .setDescription("You don\'t have permission to use that command")
            .setColor("BLACK")
            .setFooter("Velure Moderation")
            .setTimestamp()
        if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send(lackembed).then(lackembed => {

            lackembed.react("❌")
        })
        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

                if(member){
                    
                    member.kick("You were kicked from the server").then(() => {
                    message.reply(`Succesfully kicked ${user.tag}`);
                }).catch(err =>{
                    message.reply('Unable to kick member');
                    console.log(err);

                });


        }else{
            message.reply("That user is not in the server")
        }
    
    
    }else{
        message.reply("You need to specify a person")
    }
    }
}
