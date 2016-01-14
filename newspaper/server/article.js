<<<<<<< HEAD
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
	},
	deleteArt: function(id) {
	article.remove(id);
	},
	updateArt: function(id,attr){
		return article.update({_id:id},{$set: attr});
	},
});