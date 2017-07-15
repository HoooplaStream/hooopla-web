Template.serie.onCreated(function bodyOnCreated() {
    this.autorun(() => {
        Meteor.subscribe('seriesGetOne', {seriesID: Router.current().params.id}, function (error) {
            if(error) Materialize.toast('Une erreur s\'est produite !');
        });
    });
});

Template.serie.rendered = function () {

};

Template.serie.helpers({
    'seriesDetail': function () {
        var id = Router.current().params.id;
        console.log(series.find({ id }));
        return series.find({ id });
    }
});

Template.serie.events({});
