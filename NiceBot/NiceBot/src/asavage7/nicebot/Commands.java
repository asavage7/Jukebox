package asavage7.nicebot;

import net.dv8tion.jda.core.EmbedBuilder;
import net.dv8tion.jda.core.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Commands extends ListenerAdapter{
	public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
		String[] args = event.getMessage().getContentRaw().split("\\s+");
		
		if (args[0].equalsIgnoreCase(Nice.prefix + "info")) {
			EmbedBuilder info = new EmbedBuilder();
			info.setTitle("Nice Bot Information");
			info.setDescription("A useless bot for tracking when people say \"nice\". \n Coded in Java with JDA (https://github.com/DV8FromTheWorld/JDA) \n");
			info.addField("Getting Started","\n Run \"n!setup\" to set up the bot and \"n!help\" or \"n!cmds\" to view the commands. These will allow you to set spam reduction, opt-in, and leaderboard settings.",false);
			info.setColor(0xff0000);
			info.setFooter("Created by @AlexTheSavage07#3718. Support the bot with \"n!vote\".", event.getMember().getUser().getAvatarUrl());
			event.getChannel().sendMessage(info.build()).queue();
			info.clear();
		}
		
		if (args[0].equalsIgnoreCase(Nice.prefix + "vote")) {
			EmbedBuilder info = new EmbedBuilder();
			info.setTitle("Vote for NiceBot");
			info.setDescription("This helps people find the bot and helps the bot grow. You will also get a 1.25x Nice boost for 24 hours. \n");
			info.addField("Vote Link 1","\n [link will appear here when online].",false);
			info.addField("Vote Link 2","\n [link will appear here when online].",false);
			info.setColor(0xff0000);
			info.setFooter("Created by @AlexTheSavage07#3718. Support the bot with \"n!vote\".", event.getMember().getUser().getAvatarUrl());
			event.getChannel().sendMessage(info.build()).queue();
			info.clear();
		}
		
		if (args[0].equalsIgnoreCase("nice")) {
				EmbedBuilder info = new EmbedBuilder();
				info.setTitle("Nice Leaderboard");
				info.addField("Server Leaderboard","1. N/A \n 2. N/A \n 3. N/A",false);
				info.addField("World Leaderboard","1. N/A \n 2. N/A \n 3. N/A",false);
				info.addField(event.getMember().getUser().getName() + "\'s stats (server)","1. N/A",false);
				info.addField(event.getMember().getUser().getName() + "\'s stats (world)","1. N/A",false);
				info.addField("This message will be automatically deleted in 15 seconds.","Moderators can change this in settings.",false);
				info.setColor(0xff0000);
				info.setFooter("Created by @AlexTheSavage07#3718. Support the bot with \"n!vote\".", event.getMember().getUser().getAvatarUrl());
				event.getChannel().sendMessage(info.build()).queue();
				info.clear();
		}
	}
}