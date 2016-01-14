/*Meteor.publish("", function () {
    return .find({});
 });*/

Meteor.publish("article", function () {
  return article.find({});
});
Meteor.publish("comments", function () {
  return comments.find({});
});
