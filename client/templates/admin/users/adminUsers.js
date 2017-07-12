Template.adminUsers.helpers({
    'users': function(){
        return Meteor.users.find({});
    }
});

Template.adminUsers.events({
    'click #disableAccount': function(e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        Meteor.users.update(id, {$set: {activated: false}});
    },
    'click #enableAccount': function(e) {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        Meteor.users.update(id, {$set: {activated: true}});
    }
});


if(Meteor.isServer){
    Meteor.users.allow({
        update: function (userId, doc, fields, modifier) {
            if(Meteor.user() !== null) return false;
            if(Meteor.user().permission !== 4) return false;
            return true;
        },
        remove: function (userId, doc, fields, modifier) {
            if(Meteor.user() !== null) return false;
            if(Meteor.user().permission !== 4) return false;
            return true;
        }
    })
}