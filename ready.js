/* eslint-disable no-template-curly-in-string */

const activities_list = [
    ";help (${client.guilds.cache.size} Servers)", 
    "cries for ;help from ${client.users.size} people",
]; // creates an arraylist containing phrases you want your bot to switch through.
module.exports = async (client) => {
    client.on("ready", () => {
        console.log(`[API] Logged in as ${client.user.username}`);
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list
            client.user.setActivity(activities_list[index], { type: "LISTENING" }); // sets bot's activities to one of the phrases in the arraylist.
        }, 60000); // Runs this every 10 seconds.
    });
};