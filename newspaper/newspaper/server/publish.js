Meteor.publish("article", function () {
  return article.find({});
});
