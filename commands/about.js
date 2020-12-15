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
        .setFooter("Created by @AlexTheSavage#3718", "https://cdn.discordapp.com/avatars/705779777180663912/30d15189dacaf8ab618b659e21997c85.png?size=512")
        .setDescription("Jukebox is an easy to use music bot that can search and play songs and playlists from YouTube.")
        .addField("**Perks**", "The bot is completely free, and is small so music will be less interrupted than larger bots.")
        .addField("Credits", "Built on SudhanPlayz's Discord Music Bot tutorial using discord.js.")

            message.channel.send(embed)
        
    }
}
