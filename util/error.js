const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("An Error Occurred.")
        .setDescription("See below for more info.")
        .addField(`Error: ${text}`, "Contact a moderator or admin for help if needed.")

    await channel.send(embed)
}