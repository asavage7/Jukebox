const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("youtube-sr");
const sendError = require("../util/error")
const fs = require("fs");

module.exports = {
    info: {
        name: "search",
        description: "To search songs :D",
        usage: "<Song Name>",
        aliases: ["sc"],
    },

    run: async function (client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel)return sendError("You need to be in a voice channel for me to play music!", message.channel);

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT"))return sendError("I am unable to connect to the voice channel you are in. Check to make sure I have the proper permissions. (A bot role may be helpful for this)", message.channel);
        if (!permissions.has("SPEAK"))return sendError("I am unable to speak in the voice channel you are in. Check to make sure I have the proper permissions. (A bot role may be helpful for this)", message.channel);

        var searchString = args.join(" ");
        if (!searchString)return sendError("You need to provide a search term for me to search.", message.channel);

        var serverQueue = message.client.queue.get(message.guild.id);
        try {
            var searched = await YouTube.search(searchString, { limit: 10 });
            if (searched[0] == undefined)return sendError("I am unable to find that song for you. This potentially could be an error with YouTube at the moment.", message.channel);
            let index = 0;
            let embedPlay = new MessageEmbed()
                .setColor("BLUE")
                .setAuthor(`Results for "${args.join(" ")}"`, message.author.displayAvatarURL())
                .setDescription(`${searched.map(video2 => `**\`${++index}\`  |** [\`${video2.title}\`](${video2.url}) - \`${video2.durationFormatted}\``).join("\n")}`)
                .setFooter("Type the number of the song to add it to the playlist!");
            // eslint-disable-next-line max-depth
            message.channel.send(embedPlay).then(m => m.delete({
                timeout: 15000
            }))
            try {
                var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                    max: 1,
                    time: 30000,
                    errors: ["time"]
                });
            } catch (err) {
                console.error(err);
                return message.channel.send({
                    embed: {
                        color: "RED",
                        description: "Nothing has been selected within 30 seconds. The request has been canceled."
                    }
                });
            }
            const videoIndex = parseInt(response.first().content);
            var video = await (searched[videoIndex - 1]);
        } catch (err) {
            console.error(err);
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "There was an error trying to find search results. Check to make sure YouTube's servers are online."
                }
            });
        }
            
        response.delete();
        var songInfo = video

        const song = {
            id: songInfo.id,
            title: Util.escapeMarkdown(songInfo.title),
            views: String(songInfo.views).padStart(10, " "),
            ago: songInfo.uploadedAt,
            duration: songInfo.durationFormatted,
            url: `https://www.youtube.com/watch?v=${songInfo.id}`,
            img: songInfo.thumbnail.url,
            req: message.author
        };

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
                .setAuthor("Song has been added to queue", "./assets/disc.gif")
                .setThumbnail(song.img)
                .setColor("YELLOW")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField("Requested by", song.req.tag, true)
                .setFooter(`Views: ${song.views} | ${song.ago}`)
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 80,
            playing: true,
            loop: false
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async (song) => {
            const queue = message.client.queue.get(message.guild.id);
            let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
            if (!afk[message.guild.id]) afk[message.guild.id] = {
                afk: false,
            };
            var online = afk[message.guild.id]
            if (!song){
                if (!online.afk) {
                    sendError("Leaving the voice channel because queue is empty. Add another song to continue, or use the command `;afk` to let me stay in the voice channel 24/7.", message.channel)
                    message.guild.me.voice.channel.leave();//If you want your bot stay in vc 24/7 remove this line :D
                    message.client.queue.delete(message.guild.id);
                }
                return message.client.queue.delete(message.guild.id);
            }
            let stream = null; 
            if (song.url.includes("youtube.com")) {
      
                stream = await ytdl(song.url);
                stream.on("error", (er)  => {
                    if (er) {
                        if (queue) {
                            queue.songs.shift();
                            play(queue.songs[0]);
                            return sendError(`An unexpected error has occurred.\nPossible type \`${er}\``, message.channel)
                        }
                    }
                });  
            }
 
            queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = queue.connection
                .play(ytdl(song.url, {quality: "highestaudio", highWaterMark: 1 << 25 ,type: "opus"}))
                .on("finish", () => {
                    const shiffed = queue.songs.shift();
                    if (queue.loop === true) {
                        queue.songs.push(shiffed);
                    }
                    play(queue.songs[0]);
                })

            dispatcher.setVolumeLogarithmic(queue.volume / 100);
            let thing = new MessageEmbed()
                .setAuthor("Next Song in Queue, Playing Now.", "./assets/disc.gif")
                .setThumbnail(song.img)
                .setColor("BLUE")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField("Requested by", song.req.tag, true)
                .setFooter("Note: The video may not play if it is a music video, privated, or an error occcurs.")
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            channel.guild.voice.setSelfDeaf(true)
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return sendError(`I could not join the voice channel: ${error}`, message.channel);
        }
 
    },

};