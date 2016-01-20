
Template.article.events({
	'submit form': function(e,tpl){
		e.preventDefault();
		var fullname = $('#name').val();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		var date = new Date();
		
		Meteor.call('postArticle', fullname,title,url,text,date);
		Router.go('/');
	}
});

Template.article.helpers({

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
