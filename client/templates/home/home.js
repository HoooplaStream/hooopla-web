Template.homeSeries.onCreated(function bodyOnCreated() {
    Meteor.subscribe('series');
});

Template.homeSeries.rendered = function () {

};

Template.homeSeries.helpers({
    'seriesList': function () {
        return series.find();
    }
});

Template.homeSeries.events({
    'click #serie_redirect': function (e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        $(e.target).addClass('animated zoomOutLeft');
        setTimeout(function () {
            Router.go('/serie/' + id);
        }, 700);
    },
});
