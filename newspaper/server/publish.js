
Meteor.publish("comments", function () {
  return comments.find({});
});
Meteor.publish("article", function () {
  return article.find({});
});
Meteor.publish("users", function () {
return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
Meteor.publish("like", function () {
	 return like.find({});
});
