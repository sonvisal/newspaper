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