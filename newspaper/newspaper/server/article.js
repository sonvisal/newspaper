Meteor.methods({
	postArticle: function(fullname,title,url,text) {
		var attr={
			fullname:fullname,
			title:title,
			url:url,
			text:text
		};
		return article.insert(attr);
	}
});