var series = new Mongo.Collection("series");

series.allow({
    insert: function () {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    },
    update: function () {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    },
    fetch: function () {
        return true;
    },
    remove: function () {
        if(Session.get('user') === null) return false;
        let user = Meteor.user();

        return user.permission === 4;
    }
});