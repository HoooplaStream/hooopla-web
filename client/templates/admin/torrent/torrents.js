Template.adminTorrents.helpers({
    'torrents': function () {
        var transmission = new Transmission({
            host: '178.33.80.111',
            port: 9091,
        });
        return transmission.active(function(err, arg){
            if(err) Materialize.toast("Une erreur s'est produite !");
        });
    }
});