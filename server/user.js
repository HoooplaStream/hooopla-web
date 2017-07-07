Meteor.methods({
    registerUser: function(id, email, username) {
        var userCount = User.find({ facebook_id : id }).count();
        if(userCount == 0){
            User.insert({ facebook_id: id, email : email, username : username, isAccepted : false, permission: 0 });
            return true;
        } else return false;
    },
    checkExist: function(id) {
        var userCount = User.find({ facebook_id : id }).count();
        return userCount != 0;
    }
});