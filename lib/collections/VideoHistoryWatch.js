var history = new Mongo.Collection("history");

history.allow({
    insert: function () {
        return Meteor.user() !== null;
    },
    update: function () {
        return Meteor.user() !== null;
    },
    fetch: function () {
        // A voir pour que l'utilisateur récup que ses historiques.
        return true;
    }
});

history.deny({
    remove: function () {
        // L'utilisateur par logique ne pourra pas supprier son histoiruqe
        return true;
    }
});