Template.adminSeries.helpers({
    'series': function () {
        return series.find({'enable': 1});
    }
});

Template.adminSeries.events({

});


if (Meteor.isServer) {
    series.allow({
        update: function () {
            if (Meteor.user() !== null) return false;
            if (Meteor.user().permission !== 4) return false;
            return true;
        },
        remove: function () {
            if (Meteor.user() !== null) return false;
            if (Meteor.user().permission !== 4) return false;
            return true;
        }
    })
}