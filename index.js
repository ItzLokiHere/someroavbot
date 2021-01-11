const Discord = require('discord.js')

const fs = require('fs')
const bot = new Discord.Client()
const config = require('./config.json')
const { prefix, token } = config
bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

    const onlineembed = new Discord.MessageEmbed()
    .setTitle("Status")
    .setDescription("I am currently online!")
    .setTimestamp()
    .setColor("GREEN")
    


bot.on('ready', () =>{
    console.info(`${bot.user.tag} logged in correctly.`)
    bot.user.setActivity('over your naughty server ;)', { type: 'WATCHING' });
    bot.channels.cache.get('797193396602667048').send(onlineembed)
});



bot.on('message', message =>{


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!bot.commands.has(commandName)) return;
    
    const command = bot.commands.get(commandName);
    
    if (command.args && !args.length) {
        let reply = `You need to provide some arguments, ${message.author}.`

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply)
    }


try {
    command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
    
})

var POST_URL = "https://discord.com/api/webhooks/796430847682674698/ZCdtNsY3VbFxRbYnSKt41X3x1JQ37siLIUc9HINejs0aLUmLveagV1condVTeVosIPqS";

bot.login(token)