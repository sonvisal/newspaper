
Session.set('img_pro','');

Template.profile.helpers({
	users:function(id){
		var id = Meteor.userId(id);
		return Meteor.users.find(id);
	},
	getProfileImage: function(){
		var user = Meteor.user();
		var img = "";
		if(user){
			img = images.findOne({_id:user.profile.image});
		}
		if(img){
			console.log(img.copies.images.key);
			return img.copies.images.key;
		}else{
			return;
		}
	},
	haveImage: function(){
		var user = Meteor.user();
		var haveimage = user.profile.image;
		if( haveimage ){
			Session.set('img_pro', haveimage);
			return true;
		}else{
			return false;
		} 
			
	}
	
});

if (Accounts._resetPasswordToken) {
  Session.set('resetPassword', Accounts._resetPasswordToken);
}
Template.profile.events({
	  'click #save': function (event,tmp) {
        //alert(' update' );
		event.preventDefault();
		var fname = $('#fullname').val();
		var username = $('#username').val();
		var email = $('#email').val();
		var currpass = $('#currentpassword').val();
		var newpass= $('#newpassword').val();
		var conformpassword= $('#conformpassword').val();
		var img_id = Session.get('img_pro');
		
		var id = this._id;
		//console.log(fname+','+lname+','+username+','+email+','+currpass+','+newpass+','+confpass);
		
		var attr={
		
            emails:[{
				address:email
			}],
            profile:{
                fullname:fullname,
				username:username,
				password: newpass,
				image:img_id
            }
        };
		console.log( "image"+img_id);
		Meteor.call('updateprofile',id,attr);

		//users.update(id,{$set:attr});
		Router.go('/profile/'+userid);
		
	},
	'change #image': function(event, template) {
	//e.preventDefault();
    var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
				images.insert(files[i], function (err, fileObj) {
				 //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
				Session.set('img_pro', fileObj._id);
				var userid = Meteor.userId();
				users.update(userid,{$set:{"profile.image":fileObj._id}})
				
			});
			//console.log(files[i]);
		}
		console.log('img uploaded!');
	}
  });
  
Template.profile.events({
	'click #updateProfile': function(event) {
		event.preventDefault();
		var currentPassword = $('#currentpassword').val();
		var newPassword = $('#newpassword').val();
		var conformpassword = $('#conformpassword').val();
		
		if(newPassword === conformpassword && currentPassword !=""){
			alert("Password is match!");
			console.log("Change password:"+ currentPassword + ' to ' + newPassword);
			Accounts.changePassword(currentPassword, newPassword, function(error) {
				if (error) {
					$('#form-messages').html(error.reason).css("color","red");
				} else {
					$('#form-messages').html('Your password is changed!').css("color","blue");
				}
			});
		}else{
			alert("Password is not match!");
		}
		
	}
});