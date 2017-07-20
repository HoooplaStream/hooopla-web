favorites = new Mongo.Collection("favorites");

favorites.allow({
    insert: function(userId, doc, fieldNames) {
        return true;
    },
    remove: function (userId, doc, fieldNames) {
        return doc.user_id === Meteor.user()._id;
    }
});




