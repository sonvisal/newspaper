/*Meteor.publish("", function () {
    return .find({});
 });*/

Meteor.publish("article", function () {
  return article.find({});
});
