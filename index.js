/* eslint-disable no-template-curly-in-string */
require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
const activities_list = [
    ";help (${client.guilds.cache.size} Servers)", 
    "cries for ;help",
    "music (;help)",
]; // creates an arraylist containing phrases you want your bot to switch through.

client.config = {
    prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(`${__dirname  }/events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        const event = require(`${__dirname  }/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        console.log(`Loading Event: ${eventName}`)
    });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Loading Command: ${commandName}`)
    });
});


client.on("ready", () => {
    console.log(`[API] Logged in as ${client.user.username}`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list
        client.user.setActivity(activities_list[index], { type: "LISTENING" }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

//Logging in to discord
client.login(process.env.TOKEN)
