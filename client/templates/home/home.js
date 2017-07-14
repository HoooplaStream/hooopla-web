Template.home.onCreated(function bodyOnCreated() {
    Meteor.subscribe('series.get');
});

Template.home.rendered = function () {

};

Template.home.helpers({
    'series': function () {
        return series.get();
    }
});

Template.home.events({

});
