Template.home.helpers({
	getArticle: function(){
		return article.find({});
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
},
getCountComment: function(_id){
		var an = comments.find({article_id:_id}).count();
		return an;
	}
});

// Session.set("MYSEARCH", "");
// Template.home.events({
//     "click #mysearch": function(e, tpl) {
//         e.preventDefault();
//         var mysearch = tpl.$("#textsearch").val();
//         Session.set("MYSEARCH", mysearch);
//         // var curRouter = Router.current().route.path()
//             // alert("current "+curRouter);
//         // Session.set("CURRENTROUTER", curRouter);
//         Router.go("search")
//     },
//     "keyup #textsearch": function(e, tpl) {
//         // alert("prees");
//         var textsearch = tpl.$("#textsearch").val();
//         if (textsearch == '') {
//             getCurRouter = Session.get("CURRENTROUTER");
//             Router.go("search");
//         }
//     }
// });
// Template.search.helpers({
//     allarticle: function() {
//         var getMysearch = Session.get("MYSEARCH");
//         if (getMysearch != "") {
//             console.log("key:" + getMysearch);
//             var result = article.find({
//                 title: {
//                     $regex: new RegExp(getMysearch, "i")
//                 }
//             });
//             return result;
//         } else return;

//     }
//     });
