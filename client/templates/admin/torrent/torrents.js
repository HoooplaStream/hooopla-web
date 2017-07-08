const Transmission = require('transmission-client').Transmission;

Template.adminTorrents.helpers({
    'torrents': function () {
        let Client = new Transmission({
            host: '178.33.80.111'
        });

        return Client.all();
    }
});