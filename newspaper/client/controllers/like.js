// Template.home.events({

// 	"click #like":function(e){
// 		var article_id=this._id;
// 		alert(article_id);
// 		var like=1;
// 		var d = new Date();
// 		var date = d.getDate();
// 		var year = d.getFullYear();
// 		var month = d.getMonth()+1;
// 		var time = date+"/"+month+"/"+year;
// 		Meteor.call("addlike",article_id,like,time);
// 		alert("add");
// 	}
// });

Template.home.helpers({
	// like:function(){
	// 	amountlike = like.find({}).count();
	// 	return amountlike;
	// 	console.log(amountlike);
	// },
	getstatus:function(){
        var content_id = this._id;
        var status = 0;
        var result = like.find({contentId:content_id,userId:Meteor.userId()});
        result.forEach(function(transaction){
            status = transaction.status;
        });
        if(status == 1){
            return "";
	    }else{
	         return "-empty";
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