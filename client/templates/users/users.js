Template.usersOnline.helpers({
   'onlineUser': function () {
       return Meteor.users.find({ 'status.online' : true });
   }
});