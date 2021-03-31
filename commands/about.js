const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "about",
        description: "Shows info about the bot.",
        usage: "",
        aliases: ["info"]
    },

    run: async function(client, message, args){

        let embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("About Jukebox")
        .setThumbnail("https://cdn.discordapp.com/avatars/788064562111971349/bc55b69ad425ec117ad4a3a8fa360bb2.png?size=512")
        .setFooter("Created by @AlexTheSavage#3718", "./assets/pfp.png")
        .setDescription("Jukebox is an easy to use music bot that can search and play songs and playlists from YouTube.")
        .addField("**Perks**", "The bot is completely free, and is small so music will be less interrupted than larger bots.")
        .addField("**How to Contribute**", "While I am not accepting donations for the bot, you can help by voting for it [here](https://www.example.com) or by inviting it to your server (;invite).")

            message.channel.send(embed)
        
    }
}
