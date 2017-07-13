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
    'activateUser': function(id) {
        Meteor.users.update(id, {$set: {"profile.enabled": true}});
    },
    'desactivateUser': function(id) {
        Meteor.users.update(id, {$set: {"profile.enabled": false}});
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
    user.activated = false;
    user.permission = 0;

    return user;
});


