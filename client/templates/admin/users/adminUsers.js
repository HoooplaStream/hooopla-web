Template.adminUsers.helpers({
    'users': function(){
        Meteor.users.find().forEach(function(oneUser) {
            console.log(oneUser);
        });
        return Meteor.users.find({});
    }
});

Template.adminUsers.events({
    'click #disableAccount': function(e) {
        e.preventDefault();
        var id = e.target.getAttribute("data-id");
        Meteor.users.update(id, {$set: {activated: false}});
    },
    'click #enableAccount': function(e) {
        e.preventDefault();
        var id = e.target.getAttribute("data-id");
        Meteor.users.update(id, {$set: {activated: true}});
    }
});