Template.comments.events({
  "click #submits": function(e) {
	   e.preventDefault();
	   var article_id =this._id;
	   var name = $("#name").val();
	   var txt = $("#txt").val();
	   var date = new Date();
	   
	   Meteor.call('addcomment', name,txt,date,article_id);
		Router.go('/');
	  
  }
  
  });
  Template.comments.helpers({
	getArticle: function(id){
		var article_id =this._id;
		var result = article.findOne({_id:article_id});
		return result;
	},
	getComments: function(id){
     var article_id =this._id;
	 console.log(article_id);
		var result = comments.find({article_id:article_id});
		console.log(result);
		return result;
	}
});