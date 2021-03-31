# Jukebox
<img src="https://travis-ci.com/asavage7/Jukebox.svg?branch=main">
<img src="https://raw.githubusercontent.com/asavage7/Jukebox/main/assets/logocircle.png" width=128>

Jukebox is a fully-featured, completely free Discord Music Bot. It can play songs and playlists from YouTube, and can search for songs. It includes many commands to tailor Jukebox to your needs, all while hiding nothing behind a paywall.

# Commands
- `;about` ~ Shows info about the bot. 
- `;afk` ~ Allows the bot to stay in a voice channel when no music is playing. (Toggle)
- `;bassboost` ~ Boosts the current song's volume by 10x. 
- `;help <command>` ~ Shows all bot commands. 
- `;invite` ~ Gives an invite link to invite the bot to other servers. 
- `;loop` ~ Loops the current queue. (Toggle) 
- `;lyrics` ~ Get lyrics for the currently playing song. 
- `;nowplaying` ~ Shows which song or video is currently playing. 
- `;pause` ~ Pauses the currently playing music in the server. 
- `;play <URL/Name>` ~ Allows you to play most songs from YouTube. 
- `;playlist <URL/Name>` ~ Allows you to play most playlists from YouTube. 
- `;queue` ~ Shows all songs in the current queue. 
- `;remove remove <number>` ~ Removes a specific song from the queue 
- `;resume` ~ Resumes the currently paused music in the server. 
- `;search <song name>` ~ Searches a song on YouTube
- `;shuffle` ~ Shuffles songs in queue. (Toggle) 
- `;skip` ~ Skips the current song. 
- `;skipto <number>` ~ Skips to the selected song 
- `;stop` ~ Stops all songs in the current queue. 
- `;volume <volume>` ~ Changes the current bot volume.

# Known Issues

 - Spinning disc icon may glitch out, might be fixed in 1.0.3
 - Bot may refuse to play song for an unknown reason, seems to be because of timeouts or "Made for Kids" videos.
 - Bot throws an error when queue is empty rather than an info box, planning to fix on next release.
 - A whole load of issues with npm packages, none of them break the bot, but they should gradually get fixed over the next couple of releases.
 
 # Hosting
 I currently host Jukebox on a spare PC i have lying around. I would like to either move it to repl.it in the future, or accept donations to recoup some of the costs of hosting. Please keep in mind the I will *NEVER* lock features behind a paywall and donating would exclusively be for people who feel the need to.

# Hosting This Yourself

***I would appreciate if you only hosted the bot so that you can customize it to your specific needs and not to make money off of it.***

## **Windows**
![Windows CMD prompt (start.bat)](https://raw.githubusercontent.com/asavage7/Jukebox/main/assets/windows.png)
	*Prerequisites*
 1. [Node.js](nodejs.org) v14 or above
 2. [FFmpeg](https://www.ffmpeg.org/download.html)
 3. A discord bot token ([Guide](https://www.writebots.com/discord-bot-token/))
 4. A text editor, [VSCode](https://code.visualstudio.com/) and [Notepad++](https://notepad-plus-plus.org) are good choices for this but the default notepad application will work.
 5. An archive opener application such as Windows explorer (Built-in), [7-Zip](https://www.7-zip.org/) (Free), or [Winrar](https://www.win-rar.com) (Paid?)

*Instructions*

1. Download the repo and place the .zip file into a folder (eg. Downloads)
2. Unzip it with whatever application you selected earlier.
3. Open `.env-sample` with your text editor of choice and paste your Discord bot token into the `[token goes here]` field (remove the square brackets as well)
4. Save your changes and rename the file to `.env`.
5. Create a new file in the root of the repo and name it `afk.json`. You don't need to edit this.
6. Double click on `install.bat` and wait until it finishes (errors are fine as long as it doesn't fail)
7. Now run `start.bat` and the bot should now be online.



## **MacOS**
![MacOS Terminal (node index.js)](https://raw.githubusercontent.com/asavage7/Jukebox/main/assets/macos.png)
**NOTE: This has not been fully tested and is not guaranteed to work.**
	*Prerequisites*
 1. [Node.js](nodejs.org) v14 or above
 2. [FFmpeg](https://www.ffmpeg.org/download.html)
 3. A discord bot token ([Guide](https://www.writebots.com/discord-bot-token/))
 4. A text editor, [VSCode](https://code.visualstudio.com/) is a good choice for this but the default textedit application will work.
 5. The default MacOS extract application. You can use a 3rd party one as well.

*Instructions*

1. Download the repo and place the .zip file into a folder (eg. Downloads)
2. Unzip it with your archive software of choice.
3. In the root directory of the repo, press CMD-SHIFT-I to view hidden files.
4. Open `.env-sample` with your chosen text editor and paste your Discord bot token into the `[token goes here]` field (remove the square brackets as well)
5. Save your changes and rename the file to `.env`.
6. Create a new file in the root of the repo and name it `afk.json`. You don't need to edit this.
7. Open a terminal window in the directory and run `npm i` (errors are fine as long as it doesn't fail)
8. Now run `node index.js` and the bot should now be online.

## **Linux**
**NOTE: This is only tested to work on Debian-based Linux distros (Ubuntu, Mint, Rasbian, etc.)**

*Prerequisites*
 1. [Node.js](nodejs.org) (v14 or above) or use `sudo apt install nodejs`
 2. [FFmpeg](https://www.ffmpeg.org/download.html) or use `sudo apt install ffmpeg`
 3. A discord bot token ([Guide](https://www.writebots.com/discord-bot-token/))
 4. A text editor, [VSCode](https://code.visualstudio.com/) is a good choice for this but the default textedit application will work.
 5. The default Linux archive utility for your distro. You can use a 3rd party one as well.
 *Run `sudo apt update` before installing anything via the command line.*

*Instructions*

1. Download the repo and place the .zip file into a folder (eg. Downloads)
2. Unzip it with your archive software of choice.
3. Show hidden files by right-clicking the file explorer window and clicking "Show hidden files"
4. Open `.env-sample` with your chosen text editor and paste your Discord bot token into the `[token goes here]` field (remove the square brackets as well)
5. Save your changes and rename the file to `.env`.
6. Create a new file in the root of the repo and name it `afk.json`. You don't need to edit this.
7. Open a terminal window in the directory and run `npm i` (errors are fine as long as it doesn't fail)
8. Now run `node index.js` and the bot should now be online.
