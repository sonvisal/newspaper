Template.toparticle.helpers({
	getTopArticle:function(){
			//var result = like.find({});
			var result = like.find({}).contentId;
			alert(result);
			//var contentsresult= article.find({_id:result._id});
			return contentsresult;
		},
});

    