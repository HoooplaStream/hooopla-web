Template.homeSeries.onCreated(function bodyOnCreated() {
    Meteor.subscribe('seriesGet');
});

Template.homeSeries.rendered = function () {

};

Template.homeSeries.helpers({
    'seriesList': function () {
        return series.find();
    }
});

Template.homeSeries.events({

});
