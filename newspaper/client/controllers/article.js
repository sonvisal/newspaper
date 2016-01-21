Session.set("PostError", "" );
Session.set('page_msg',"");

Template.article.events({
	'submit form': function(e,tpl){
		e.preventDefault();
		var fullname = $('#name').val();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		var date = new Date();
		var msg="";
		if(!Meteor.userId()){
			Router.go("/login")
		}else{
			if(fullname == "" || title == "" || url == ""){
				if(fullname =="")
					msg+="Full Name is required"
				if(title =="")
					msg+="Title  is required"
				if(url =="")
					msg+="Url  is required"
				
				Session.set("PostError", msg );
				Session.set('page_msg',msg);
			}else{

				Meteor.call('postArticle', fullname,title,url,text,date,function(err){
				if(err){
					console.log(err.reason);
					Session.set("PostError",err.reason);
				}else{
					Session.set("PostError","");
					Session.set("loginError","");
					// Router.go('login');
				}
				});
				Router.go('/');

			}
			
		}
	}
});

Template.article.helpers({
	getmsg: function(){
		var msg = Session.get('page_msg',msg);
		if( msg !="" ) return msg;
		else msg ='';
	},
	PostError:function(){
		var msg = Session.get("PostError");
		if(msg) return true;
		else return false;
	},
	PostErrormsg: function(){
		return Session.get("PostError");
	}
});

Template.managepost.helpers({
	allArticle: function(){
		return article.find({});
	}
});
Template.managepost.events({
	"click #remove": function(e, tpl) {
		var id=this._id;
		Meteor.call('deleteArt', id);
		
	} 
});
Template.updatearticle.events({
	"click #updateart": function(e, tpl) {
		var id=this._id;
		var fullname = $('#name').val();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		var attr={
	  		fullname:fullname,
	  		title:title,
	  		url:url,
	  		text:text
	  	};
		Meteor.call('updateArt',id,attr);
		Router.go("admin");
		return false;
		
	} 
});
