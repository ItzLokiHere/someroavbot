module.exports = {
    name: 'ping',  
    description: 'ping command',
    execute(message, args){
        message.channel.send("Checking for ping...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
          

            m.edit(`Velure Bot's ping is: **${ping}** ms :ping_pong:`);

        });



    }


}