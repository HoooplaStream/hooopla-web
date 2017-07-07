Template.home.rendered = function() {
    if(currentUser == null) Router.go('login');
};