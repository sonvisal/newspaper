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
	getArticle: function(){
		return article.find({});
	},
	getComments: function(_id){
     com = comments.findOne({article_id:_id});
	 return com.txt;
	},

 timeSince: function(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
});