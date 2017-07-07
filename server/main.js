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
        user.activated = false;
        user.permission = 0;

        return user;
    });
});
