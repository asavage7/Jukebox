package asavage7.nicebot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.OnlineStatus;
import net.dv8tion.jda.core.entities.Game;

public class Nice {
    public static String prefix = "+";

    public static void main(String[] args) throws LoginException {
        JDABuilder builder = new JDABuilder();
        builder.setToken("NzIyNTU1OTYyNzE5OTkzODc3.XukyrQ.cJz6QcZeGTmOyiDXgns3L6UrYLw");
        builder.setStatus(OnlineStatus.ONLINE);
        builder.setGame(Game.playing("nice or else"));

        builder.addEventListener(new Commands());

        builder.build();
    }
}
	
