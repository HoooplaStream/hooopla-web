Template.homeSeries.rendered = function () {

};

Template.homeSeries.helpers({
    'seriesList': function () {
        return series.find();
    },
    'favoritesList': function () {
        var finalList = [];

        favorites.find({user_id: Meteor.userId()}).forEach(function (favorite) {
            finalList.add(favorite.serie_id)
        });

        return series.find({id: {$in: finalList}});
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
