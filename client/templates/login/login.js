Template.login.events({
    'click .login-facebook': function(e) {
        e.preventDefault();

        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            Materialize.toast('Connexion réussie !', 2000);
            if (err) {
                console.log('Facebook API Error: ', err);
                Materialize.toast('Une erreur s\'est produite : ' + err, 4000);
            } else {
                Router.go('/');
            }
        });
    }
});