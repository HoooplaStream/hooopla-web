Template.home.rendered = function () {

};

Template.home.helpers({
    'series': function () {
        return series.find({'enable': true}).fetch();
    }
});

Template.home.events({

});
