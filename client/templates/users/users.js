if (Meteor.isClient) Meteor.subscribe('userStatus');

Template.usersOnline.helpers({
    'onlineUser': function () {
        return Meteor.users.find({'status.online': true});
    },
    'movies': function () {
        let promise = TMDB.Client.tv(id, 'Prison Break');
        console.log(promise);
    }
});