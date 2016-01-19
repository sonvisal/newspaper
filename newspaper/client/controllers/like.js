Template.home.events({

	"click #like":function(e){
		var article_id=this._id;
		alert(article_id);
		var like=1;
		var d = new Date();
		var date = d.getDate();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var time = date+"/"+month+"/"+year;
		Meteor.call("addlike",article_id,like,time);
		alert("add");
	}
});

Template.home.helpers({
	like:function(){
		amountlike = like.find({}).count();
		return amountlike;
		console.log(amountlike);
	}

});