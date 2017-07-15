Template.adminUsers.onCreated(function bodyOnCreated() {
    Meteor.subscribe('users');
});

Template.adminUsers.helpers({
    'users': function () {
        return Meteor.users.find({});
    }
});

Template.adminUsers.events({
    'click #disableAccount': function (e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        Meteor.call('user.desactivate', id, (error) => {
            if (error) Materialize.toast(error.message);
            else Materialize.toast('L\'utilisateur a été désactivé !');
        });
    },
    'click #enableAccount': function (e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        Meteor.call('user.activate', id, (error) => {
            if (error) Materialize.toast(error.message);
            else Materialize.toast('L\'utilisateur a été activé !');
        });
    }
});


if (Meteor.isServer) {
    Meteor.users.deny({
        update: function (userId, doc, fields, modifier) {
            if (!Meteor.user()) return false;
            console.log('user logged');
            if (Meteor.user().profile.permission !== 4) return false;
            console.log('pas la perm');
            return true;
        },
        remove: function (userId, doc, fields, modifier) {
            if (Meteor.user() !== null) return false;
            if (Meteor.user().profile.permission !== 4) return false;
            return true;
        }
    })
}