// Publish

Meteor.publish('series.get', function () {
    return series.get();
});