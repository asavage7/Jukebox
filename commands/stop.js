const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const { Command } = require('discord.js-commando');

module.exports = {
  info: {
    name: "stop",
    description: "Stops all songs in the current queue.",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("You need to be in a voice channel for me to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could stop for you.", message.channel);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop the music");
    message.react("✅")
  },
};
