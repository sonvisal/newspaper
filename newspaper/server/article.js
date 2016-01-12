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
	},

	deleteArt: function(id) {
	article.remove(id);
	},
	updateArt: function(id,attr){
		return article.update({_id:id},{$set: attr});
	},
});