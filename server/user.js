Meteor.methods({
    checkUserExist: function(id) {
        var userCount = User.find({ facebook_id : id }).count();
        return userCount != 0;
    }
});