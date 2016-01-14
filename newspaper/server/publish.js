
Meteor.publish("comments", function () {
  return comments.find({});
});
/*Meteor.publish("", function () {
    return .find({});
 });*/

Meteor.publish("article", function () {
  return article.find({});
});
Meteor.publish("users", function () {
return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

