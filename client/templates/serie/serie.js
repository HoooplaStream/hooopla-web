meteor add sessionTemplate.serie.events({
    'click #removeFromFavorite': function () {
        Meteor.call('removeFavorite', Session.get('currentSerie'), function(error) {
            if (error) Materialize.toast(error.message);
            else Materialize.toast('La série a été retiré de votre liste !');
        });
    },
    'click #addToFavorite': function () {
        Meteor.call('insertFavorite', Session.get('currentSerie'), function(error) {
            if (error) Materialize.toast(error.message);
            else Materialize.toast('La série a été ajouté à votre liste !');
        });
    }
});