Router.configure({
    layoutTemplate: 'layout'
});

// Site
Router.route('/', {name: 'home'});
Router.route('/login', {name: 'login'});

// User
Router.route('/logout', function () {
    Meteor.logout();
});

// Admin
Router.route('/admin/users', {name: 'adminUsers'});

// Permission
Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
        this.redirect('/login');
    } else {
        if(Iron.Location.get().path.includes('admin') && !Meteor.user().permission < 4){
            this.redirect('/home');
        }else if(Iron.Location.get().path.includes('login') && Meteor.loggingIn()){
            this.redirect('/home');
        }
    }
    this.next();
});