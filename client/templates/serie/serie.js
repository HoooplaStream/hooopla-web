Template.serie.onCreated(function () {
    Tracker.autorun(() => {
        Meteor.subscribe('series.getOne', Router.current().params._id);
    });

    this.autorun(function () {
        var subscription = Meteor.subscribe('series.getOne', Router.current().params._id);

        if (subscription.ready()) {
            console.log("Reception de la série " + Router.current().params._id);
        } else {
            console.log("> Subscription is not ready yet. \n\n");
        }
    });

    this.seriesDB = function() {
        var idDB = Router.current().params._id;
        return series.findOne(idDB);
    }
});

Template.serie.helpers({
    'seriesDetail': function () {
        return this.seriesDB;
    }
});

Template.serie.events({});
