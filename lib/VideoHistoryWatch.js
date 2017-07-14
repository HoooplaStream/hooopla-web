export const history = new Mongo.Collection("history");

history.allow({
    insert: function (userId, doc, fields, modifier) {
        return Meteor.user() !== null;
    },
    update: function (userId, doc, fields, modifier) {
        return Meteor.user() !== null;
    }
});