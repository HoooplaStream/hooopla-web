Template.adminTorrents.helpers({
    'torrents': function () {
        var Transmission = require('transmission');
        var transmission = new Transmission({
            host: 'torrent.cseries.tk',
            ssl: true
        });
        var torrents = transmission.all();
        console.log(torrents);
        return torrents;
    }
});