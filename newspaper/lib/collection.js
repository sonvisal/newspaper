
comments = new Mongo.Collection("comments");
users = Meteor.users;
article = new Mongo.Collection("article");
article.initEasySearch('title');
like = new Mongo.Collection("like");
