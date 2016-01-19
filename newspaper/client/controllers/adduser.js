Session.set("adduserError","");
Session.set('page_msg',"");

Template.manageuser.events({
	"click #adduser":function(e){
		alert("hello");
        e.preventDefault();
        var firstname=$("#firstname").val();
        var lastname=$("#lastname").val();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var rerole=$("#role").val();
        console.log(username+""+email+""+password+""+lastname+""+firstname);
        var result = users.find({email:email});
			var msg = '';
		if( result.count() > 0 || firstname == "" || lastname == ""|| email == ''|| username=="" || password == '' || rerole == ''){

			if( firstname == '' )
				msg += 'Firt Name is required.';
			if( lastname == '' )
				msg += 'Last Name is required.';
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
			Session.set("adduserError", msg );
			Session.set('page_msg',msg);

		}else{
			Meteor.call('addUser',firstname,lastname,email,username, password, rerole,function(err){
				if(err){
					console.log(err.reason);
					Session.set("adduserError",err.reason);
				}else{
					Session.set("adduserError","");
				}
			});
		}
    	}

	});

Template.manageuser.helper({
	getmsg: function(){
		var msg = Session.get('page_msg',msg);
		if( msg !="" ) return msg;
		else msg ='';
	},
	adduserError:function(){
		var msg = Session.get("adduserError");
		if( msg ) return true;
		else return false;
	},
	adduserErrormsg: function(){
		return Session.get("adduserError");
	}

});