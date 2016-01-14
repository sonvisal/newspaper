Meteor.methods({
	addcomment: function(name,txt,date,article_id) {
		var attr={
			name:name,
			txt:txt,
			date:date,
			article_id:article_id
		};
		return comments.insert(attr);
	}
});