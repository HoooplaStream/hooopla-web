Template.serie.events({
    'click #removeFromFavorite': function () {
        Meteor.call('removeFavorite', Router.current().params._id, function(error) {
            if (error) Materialize.toast('Une erreur s\'est produite lors de la supression de la série dans votre liste');
        });
    },
    'click #addToFavorite': function () {
        Meteor.call('insertFavorite', Router.current().params._id, function(error) {
            if (error) Materialize.toast('Une erreur s\'est produite lors de l\'ajout de la série dans votre liste');
        });
    }
});