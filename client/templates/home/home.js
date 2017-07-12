Template.home.rendered = function () {

};

Template.home.helpers({
    'series': function () {
        return series.find({'enable': true});
    }
});

Template.home.events({

});
