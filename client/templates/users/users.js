Template.users.helpers({
   'users': function () {
       return Meteor.users.find({ "status.online" : true })
   }
});