
Meteor.methods({
	insertlike:function(content_id,status,type){
  		var userId = Meteor.userId();
  		var attr = {
	   	contentId : content_id,
	    user: userId,
	   	status : status,
	   	date : new Date()
  	}
  	return like.insert(attr);
 	},
 	removelike:function(content_id){
  		var userId = Meteor.userId();
  
  		return like.remove({contentId:content_id, user:userId});
 	}
	
});