var history = new Mongo.Collection("history");

history.allow({
    insert: function (userId, doc, fields, modifier) {
        return Meteor.user() !== null;
    },
    update: function (userId, doc, fields, modifier) {
        return Meteor.user() !== null;
    },
    fetch: function (userId, doc, fields, modifier) {
        // A voir pour que l'utilisateur récup que ses historiques.
        return true;
    }
});