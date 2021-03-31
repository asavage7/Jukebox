const sendError = require("../util/error");

module.exports = {
    info: {
        name: "skip",
        description: "Skips the current song.",
        usage: " ",
        aliases: ["s"],
    },

    run: async function (client, message) {
        const channel = message.member.voice.channel
        if (!channel)return sendError("You need to be in a voice channel for me to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue)return sendError("There is nothing playing that I could skip for you.", message.channel);
        serverQueue.connection.dispatcher.end("Skipped the music");
        message.react("✅")
    },
};
