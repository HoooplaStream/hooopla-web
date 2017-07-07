import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '1912649022307785',
        secret: 'afe68df1a55ebc24c479234b1104c757'
    });

    Accounts.onCreateUser(function (options, user) {
        if (!user.services.facebook) {
            return user;
        }
        user.id = user.services.facebook.id;
        user.username = user.services.facebook.name;
        user.email = user.services.facebook.email;

        var userCount = User.find({ facebook_id : user.id }).count();
        if(userCount == 0){
            // Inscription
            User.insert({ facebook_id: user.id, email : user.email, username : user.username, isAccepted : false, permission: 0 });
            Materialize.toast('Votre inscription a été pris en compte, vous recevrez un message d\'ici peu validant ou pas votre demande d\'invitiation');
        }else{
            // Connexion
            Materialize.toast('Connexion en cours...');
            var userDB = User.findOne({ facebook_id : user.id }).fetch();

            if(userDB.isAccepted == true){
                Session.set('user', userDB);
                Materialize.toast('Connexion réussite !');
            }else{
                Materialize.toast('Votre compte n\'a pas encore été accepté désolé !');
            }
        }

        return user;
    });
});
