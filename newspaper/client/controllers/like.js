
Template.home.helpers({
	getstatus:function(){
        var content_id = this._id;
        var status = 0;
        var result = like.find({contentId:content_id,userId:Meteor.userId()});
        result.forEach(function(transaction){
            status = transaction.status;
        });
        if(status == 1){
            return true;
	    }else{
	         return false;
	        }
	    },
	totalLike:function(){
        var content_id = this._id;
        var sum = 0;
        var result = like.find({contentId:content_id});
            result.forEach(function(transaction){
            sum = sum + transaction.status;
        });
         return sum;   
	},
	getColor:function(){
        var content_id = this._id;
        var status = 0;
        var result = like.find({contentId:content_id,userId:Meteor.userId()});
        result.forEach(function(transaction){
            status = transaction.status;
        });
        if(status == 1){
            return "red";
	    }else{
	        return "";
	    }
	}
});
Session.set('like_login',"");
Template.home.events({
	"click #like": function(){
          console.log(this._id);
          Session.set('like_login',this._id);
          Router.go('login');
    },
	'click .glyphicon-thumbs-up':function(e){
        e.preventDefault();
        var content_id = this._id;
        var userId = Meteor.userId();
        var status = 0;
        if(!Meteor.userId()) {
             
	         Session.set('like_login',content_id);
	         Router.go('login');
        } 
        else{
            status = 1;
            var elementId = '.'+this._id;
            
            $(elementId).removeClass("glyphicon-thumbs-up");
            $(elementId).addClass("glyphicon-heart");
            $(elementId).css("color", "red"); 
            Meteor.call('insertlike',content_id,status,'1');   
        }
    },
    'click .glyphicon-heart':function(e){
        e.preventDefault();
        var content_id = this._id;
        if(!Meteor.userId()) {
	         
	         Session.set('like_login',content_id);
	         Router.go('login');
        } 
        else{
        	status = 0;
        	var elementId = '.'+this._id;
            $(elementId).removeClass("glyphicon-heart");
            $(elementId).addClass("glyphicon-thumbs-up");
            $(elementId).css("color","#5cb85c"); 
            Meteor.call('removelike', content_id);
        }
    }
});
