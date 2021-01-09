module.exports = {
	name: 'image',
    description: 'random image of something',
    args: true,
    usage: "<object>",
	execute(message, args) {
        const Discord = require('discord.js')
        const cheerio = require('cheerio')
        const request = require('request')

        image(message);
        var nonowords = [
            "porn",
            "nsfw",
            "hentai",
            "rape",
            "gore",
            "naked",
            "boobs",
            "dick",
            "penis",
            "ass"
            
        ]


        function image(message){
            // https://results.dogpile.com/serp?qc=images&q=danny-devito
            
            }
            var options = {
                
                url: `https://results.dogpile.com/serp?qc=images&q=${args[0]}+${args[1]}+${args[2]}+${args[3]}`,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
        }
        request(options, function(error,response,responseBody){
           
            if (error) {
                return
            }

            $ = cheerio.load(responseBody)

            var links = $(".image a.link")

            var urls = new Array(links.length).fill(0).map((v,i) => links.eq(i).attr("href"))
            
            console.info(urls)
            if(!urls.length) {
                return
            }

            message.channel.send( urls[Math.floor(Math.random() * urls.length)] + " ")
        })
	},
};  