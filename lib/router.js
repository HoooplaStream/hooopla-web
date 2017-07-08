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
Router.route('/admin/torrents', {name: 'adminTorrents'});

// Permission
Router.onBeforeAction(function() {
    console.log(Meteor.user().permission);
    if (!Meteor.userId()) {
        this.redirect('/login');
    } else {
        if(Iron.Location.get().path.includes('admin') && Meteor.user().permission < 4){
            this.redirect('/');
        }else if(Iron.Location.get().path.includes('login') && Meteor.loggingIn()){
            this.redirect('/');
        }
    }
    this.next();
});

// Transition
Transitioner.default({
    in: 'transition.fadeIn',
    out: 'transition.fadeOut'
});