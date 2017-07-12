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



});
