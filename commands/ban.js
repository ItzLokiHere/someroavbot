module.exports = {
    name: 'ban',
    description:'ban command',
    args:true,
    usage: '<user>',
    execute(message, args){
        const Discord = require('discord.js')

        var lackembed = new Discord.MessageEmbed() // If player is not admin
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
                    
                    member.ban("You were ban from the server").then(() => {
                    message.reply(`Succesfully ban ${user.tag}`);
                }).catch(err =>{
                    message.reply('Unable to ban member');
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