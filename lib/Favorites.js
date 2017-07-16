favorites = new Mongo.Collection("favorites");

favorites.allow({
    insert: function(userId, doc, fieldNames) {
        return true;
    },
    remove: function (userId, doc, fieldNames) {
        return doc.user_id === Meteor.user()._id;
    }
});

Meteor.methods({
    insertFavorite: function(serie_id) {
        return favorites.insert({serie_id: serie_id, user_id: Meteor.user()._id});
    },
    removeFavorite: function(serie_id) {
        var user = Meteor.userId();
        return favorites.remove({serie_id: serie_id, user_id: Meteor.user()._id});
    }
});


