Session.set('page_msg','');
Session.set("registerError","");

Template.register.events({
    'click #register': function(event){
    	alert("hello");
        event.preventDefault();
        var fullname = $('#fullname').val();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var rerole="admin";
        console.log(fullname+""+username+""+email+""+password);
        var result = users.find({email:email});
			var msg = '';
		if( result.count() > 0 || fullname == '' ||email == ''|| username=="" || password == '' || rerole == ''){

			if( fullname == '' )
				msg += 'Firt Name is required.';
			if( username == '' )
				msg += 'User Name is required.';
			if( email == '' )
				msg += 'Email is required.';
			if( password == '' )
				msg += 'Password is required.';
			if( rerole == '' )
				msg += 'Role is required.';

			if( result.count() > 0 ){
				msg = " Email name is already exist. ";
			}
			//console.log("required");
			Session.set("registerError", msg );
			Session.set('page_msg',msg);

		}else{
			Meteor.call('registerUser',fullname,email,username, password, rerole,function(err){
				if(err){
					console.log(err.reason);
					Session.set("registerError",err.reason);
				}else{
					Session.set("registerError","");
					Session.set("loginError","");
					Router.go('login');
				}
			});
		}
    }
});

Template.register.helpers({

	getmsg: function(){
		var msg = Session.get('page_msg',msg);
		if( msg !="" ) return msg;
		else msg ='';
	},
	registerError:function(){
		var msg = Session.get("registerError");
		if( msg ) return true;
		else return false;
	},
	registerErrormsg: function(){
		return Session.get("registerError");
	}
});