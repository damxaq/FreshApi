package controllers;

import java.util.List;

import models.User;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class Admin extends Controller{

    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            User user = User.find("byLogin", Security.connected()).first();
            renderArgs.put("user", user.login);
        }
    }
 
    
    public static void index() {
        String user = Security.connected();
        render();
    }
	
	
}
