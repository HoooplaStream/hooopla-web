import { Accounts } from 'meteor/accounts-base';

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

Meteor.users.deny({
    update: function() {
        return Meteor.user().profile.permission == 4;
    }
});