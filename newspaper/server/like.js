
Meteor.methods({
	addlike:function(article_id,like,date) {
		var attr={
			articleid:article_id,
			like:like,
			date:date
		};
		return like.insert(attr);
	}
	
});