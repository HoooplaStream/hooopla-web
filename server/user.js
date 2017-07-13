// User

if (Meteor.isServer) {
    Meteor.publish("userStatus", function () {
        return Meteor.users.find({"status.online": true});
    });

    Meteor.publish('users', function () {
        return Meteor.users.find();
    });

    Meteor.publish('usersActivated', function () {
        return Meteor.users.find({'activated': true});
    });
}

Meteor.methods({
    'checkUserExist': function(id) {
        var userCount = Meteor.users.find({facebook_id: id}).count();
        return userCount != 0;
    },
    'countUser': function() {
        return Meteor.users.count();
    },
    'user.activate': function(id) {
        if(!Meteor.userId()) throw new Meteor.Error('not-logged', 'Vous n\'êtes pas connecté !');

        var permission = Meteor.users.findOne({_id:Meteor.userId()}).profile.permission;
        if(permission < 4) throw new Meteor.Error('not-logged', 'Vous n\'avez pas les permissions !');

        Meteor.users.update(id, { $set: { 'profile.enabled': true } }, function(error, affectedDocs) {
            if (error) {
                throw new Meteor.Error('not-logged', error.message);
            } else {
                return "Update Successful";
            }
        });
    },
    'user.desactivate': function(id) {
        if(!Meteor.userId()) throw new Meteor.Error('not-logged', 'Vous n\'êtes pas connecté !');

        var permission = Meteor.users.findOne({_id:Meteor.userId()}).profile.permission;
        if(permission < 4) throw new Meteor.Error('not-logged', 'Vous n\'avez pas les permissions !');

        Meteor.users.update(id, { $set: { 'profile.enabled': false } }, function(error, affectedDocs) {
            if (error) {
                throw new Meteor.Error('not-logged', error.message);
            } else {
                return "Update Successful";
            }
        });
    }
});

// Compte

Accounts.config({
    loginExpirationInDays: 31,
    sendVerificationEmail: false
});

Accounts.onCreateUser(function (options, user) {
    if (!user.services.facebook) {
        return user;
    }
    user.id = user.services.facebook.id;
    user.username = user.services.facebook.name;
    user.email = user.services.facebook.email;
    user.profile.enabled = false;
    user.profile.permission = 0;

    return user;
});


