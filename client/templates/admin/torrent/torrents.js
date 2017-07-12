Template.adminTorrents.helpers({
    'torrents': function () {
        Meteor.http.call("GET", 'https://apit.cseries.tk/index.php?token=f4sd56qf4987jn9g8h7j98798k7y949hg9df7s&request=getAll', function (error, result) {
            if(error){
                Materialize.toast('Une erreur s\'est produite !');
                return;
            }
            var respJson = JSON.parse(result.content);
            Materialize.toast(respJson);
            return respJson;
        });
    }
});