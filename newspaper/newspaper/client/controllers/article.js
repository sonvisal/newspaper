Template.article.events({
	'submit form': function(e,tpl){
		e.preventDefault();
		var fullname = $('#name').val();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		Meteor.call('postArticle', fullname,title,url,text);
		Router.go('/view');
	}
});