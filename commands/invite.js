const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "Gives an invite link to invite the bot to other servers.",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 3460160;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setThumbnail("https://cdn.discordapp.com/avatars/788064562111971349/bc55b69ad425ec117ad4a3a8fa360bb2.png?size=512")
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};