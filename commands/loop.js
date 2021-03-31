const sendError = require("../util/error");

module.exports = {
    info: {
        name: "loop",
        description: "Loops the current queue. (Toggle)",
        usage: " ",
        aliases: ["l"],
    },

    run: async function (client, message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        }
        return sendError("There is nothing playing in this server.", message.channel);
    },
};