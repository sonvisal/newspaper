Meteor.methods({
	postArticle: function(fullname,title,url,text,time) {
		var attr={
			fullname:fullname,
			title:title,
			url:url,
			text:text,
			date:time
		};
		return article.insert(attr);
	}
});