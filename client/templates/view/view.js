Template.view.rendered = function () {
    Streamy.join(Meteor.userId());
};

Template.homeSeries.helpers({
    'room': function () {
        var room = Streamy.rooms(Meteor.userId());
        console.log(room);
        return room;
    },
});