var series = new Mongo.Collection("requested_series");

series.allow({
    insert: function (userId, doc, fields, modifier) {
        return Meteor.user() !== null;
    },
    update: function (userId, doc, fields, modifier) {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    },
    fetch: function (userId, doc, fields, modifier) {
        // todo ajouter la condition que ce soit l'user qui ai crée qui puisse récup
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    },
    remove: function (userId, doc, fields, modifier) {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    }
});