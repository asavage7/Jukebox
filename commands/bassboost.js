const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "bassboost",
    description: "Boosts the bot's volume by 10x. To stop, use ;volume 10.",
    usage: " ",
    aliases: ["bb"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("You need to be in a voice channel for me to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    serverQueue.volume = 100; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(20);
    let xd = new MessageEmbed()
    .setDescription(`bAsS iS nOw BoOsTeD. tO uNdO, uSe ;volume 10`)
    .setTitle("Volume")
    .setColor("BLUE")
    return message.channel.send(xd);
  },
};
