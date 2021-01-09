module.exports = {
	name: 'lookup',
    description: 'find an avatar!',
    args: true,
    usage: "<roblox id>",
	execute(message, args) {
        const Discord = require('discord.js')
        const noblox = require('noblox.js')
        
        let idorusername = args[0]

        function isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!  
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                   !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
          }

          if (isNaN(idorusername)){
            let idfromuser = noblox.getIdFromUsername(idorusername).then(function(userId)  {
                message.channel.send(`${idorusername}'s id is ${userId}`)
                message.channel.send(`https://www.roblox.com/users/${userId}/profile`)

            }).catch(function(error) { //Handle the rejection accordingly.
                message.channel.send("There was an error getting the id!")
                console.log(error)
              })

    
          } else {
            let username = noblox.getUsernameFromId(idorusername).then(function(username2)  {
                message.channel.send(`${username2} is the person with the id of ${idorusername}.`)
            }).catch(function(error) { //Handle the rejection accordingly.
                console.log(error)
                message.channel.send("There was an error getting the username!")

              })

          }
       
	}
};