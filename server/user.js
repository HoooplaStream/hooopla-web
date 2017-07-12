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

Accounts.onLogin(function (options, user) {
    user.permission = 1;

    return user;
});

Meteor.methods({
    checkUserExist: function (id) {
        var userCount = Meteor.users.find({facebook_id: id}).count();
        return userCount != 0;
    },
    countUser: function () {
        return Meteor.users.count();
    }
});