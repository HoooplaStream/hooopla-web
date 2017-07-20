Template.homeSeries.rendered = function () {

};

Template.homeSeries.helpers({
    'seriesList': function () {
        return series.find();
    },
    'favoritesList': function () {
        var finalList = [];

        Meteor.user().favorites.forEach(function (favorite) {
            finalList.add(favorite)
        });

        return series.find({id: {$in: finalList}});
    }
});

Template.homeSeries.events({
    'click #serie_redirect': function (e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        $(e.target).addClass('animated zoomOutLeft');
        Session.set('currentSerie', id);
        setTimeout(function () {
            Router.go('/serie/' + id);
        }, 700);
    },
});
