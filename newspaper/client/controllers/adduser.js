Session.set("adduserError","");
Session.set('page_msg',"");

Template.manageuser.events({
	"click #adduser":function(e){
        e.preventDefault();
        var fullname=$("#fullname").val();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var role=$("#role").val();
         //console.log(username+""+email+""+password+""+fullname);
        var result = users.find({emails:email});
			var msg = '';
		if( result.count() > 0 || fullname == "" || email == ''|| username=="" || password == '' || role == ''){

			if( fulltname == '' )
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
			Session.set("adduserError", msg );
			Session.set('page_msg',msg);

		}else{
			Meteor.call('adduser',fullname,email,username, password, role,function(err){
				if(err){
					console.log(err.reason);
					Session.set("adduserError",err.reason);
				}else{
					Session.set("adduserError","");
				}
			});
		}
    },
    "click #remove": function(e, tpl) {
		e.preventDefault();
		var id = this._id;
		Meteor.call('deleteUser',id);
	}
});
Template.edituser.events({
    "click #updateUser": function(e, tpl) {
		e.preventDefault();
		//alert("update"); 
		//var id = Meteor.userId();
		var id = this._id;
		var fullname =$('#fullname').val();
		var username =$('#username').val();
		var email = $('#email').val();
		var role = $('#role').val();
		console.log(fullname,username,email,role);

		var attr={
		
            emails:[{
				address:email
			}],
            profile:{
                fullname:fullname,
				username:username
            }
        };
        var attrroles = {
            mygroup:[role]
        };
		
		console.log(attr);
        Meteor.call('updateuser', id,attr);
        Meteor.call('updateroles', id,attrroles);
        Router.go("/manageuser");
      }
});

Template.manageuser.helpers({
	updateuser: function(){
		var id = Meteor.userId();
		return Meteor.users.find({_id:id});
		
   	},
	allUserlist: function(){
		return Meteor.users.find();
		
	},
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