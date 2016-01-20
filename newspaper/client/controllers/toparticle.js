Template.toparticle.helpers({
	getTopArticle:function(){
        var result = like.find({});
        var idarray=[]
        result.forEach(function (result) {
		   console.log(result.contentId);
		   id.array.push(result.contentId);
		   return 'test output';
		 });
        return result;
	}
});

    