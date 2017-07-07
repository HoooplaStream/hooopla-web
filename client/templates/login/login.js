Template.login.events({
    'click .login-facebook': function(e) {
        e.preventDefault();

        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
                Materialize.toast('Une erreur s\'est produite : ' + err, 4000);
            }
        });
    }
});