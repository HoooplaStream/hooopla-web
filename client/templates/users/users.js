Template.usersOnline.helpers({
   'onlineUser': function () {
       return Meteor.subscribe('userStatus');
   }
});