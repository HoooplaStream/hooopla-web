var series = new Mongo.Collection("series");

series.allow({
    insert: function (userId, doc, fields, modifier) {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    },
    update: function (userId, doc, fields, modifier) {
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