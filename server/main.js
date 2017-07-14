import {Meteor} from "meteor/meteor";
import {Roles} from "meteor/jalik:roles";

Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '1912649022307785',
        loginStyle: "popup",
        secret: 'afe68df1a55ebc24c479234b1104c757'
    });

    ServiceConfiguration.configurations.update({
        service: 'tmdb'
    },{$set: {
        apiKey: '1f5a707eebaff5c4a425834d7b2c144f'
    }},{
        upsert: true
    });

    process.env.MONGO_URL = "mongodb://cseries:1Uij3BcTcSPLmfzdL@localhost:27017/CSeries";
});
