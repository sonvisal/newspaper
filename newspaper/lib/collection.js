
comments = new Mongo.Collection("comments");
users = Meteor.users;
article = new Mongo.Collection("article");
article.initEasySearch('title');
like = new Mongo.Collection("like");

// images = new FS.Collection("images", {
//     stores: [new FS.Store.FileSystem("images", {path:base_path+"/uploads"})]
// });
