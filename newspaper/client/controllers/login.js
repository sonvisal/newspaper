Session.set("loginError","");
Template.login.events({
    'click #login': function(event){
        event.preventDefault();
        var email = $('#username').val();
        var password = $('#password').val();
        Meteor.loginWithPassword(username, password, function(error){
			if(error){
				console.log(error.reason);
				Session.set("loginError",error.reason);
			} else {
				Session.set("loginError","");
				Session.set("registerError","");
				 var loggedInUser = Meteor.user();
				 var group = 'admin';
				if (Roles.userIsInRole(loggedInUser, ['admin'], group)) {
					Router.go('/admin');
				}
				else{
					Router.go('/');
					 // $('.close').click();
				}
			}
		});
		Meteor.loginWithPassword(email, password, function(error){
			    if(error){
			        Session.set("loginError",error.reason);
			    } else {
			        Router.go('/admin');
			    }
		});
    }
	
});

Template.login.helpers({
	loginError:function(){
		var msg = Session.get("loginError");
		if( msg ) return true;
		else return false;
	},
	loginErrormsg: function(){
		return Session.get("loginError");
	}
});