Meteor.methods({
	postArticle: function(fullname,title,url,text,date) {
		var attr={
			fullname:fullname,
			title:title,
			url:url,
			text:text,
			date:date
		};
		return article.insert(attr);
	}
});