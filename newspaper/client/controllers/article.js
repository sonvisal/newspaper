Template.article.events({
	'submit form': function(e,tpl){
		e.preventDefault();
		var fullname = $('#name').val();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		var d = new Date();
		var date = d.getDate();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var time = date+"/"+month+"/"+year;
		Meteor.call('postArticle', fullname,title,url,text,time);
		Router.go('/view');
	}
});