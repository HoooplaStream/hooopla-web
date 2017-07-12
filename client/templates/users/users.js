Template.users.helpers({
   'users': function () {
       return Meteor.users.find({'activated' : 1});
   }
});

if(Meteor.isServer){
    Meteor.users.allow({
        fetch: true
    });
    Meteor.users.deny({
        insert: false,
        update: false,
        remove: false,
        transform: false
    })
}