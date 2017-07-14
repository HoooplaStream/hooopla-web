Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'layout',
    progressSpinner : false
});

// Site
Router.route('/', {
    name: 'homeSeries',
    waitOn: function () {
        return Meteor.subscribe('seriesGet');
    },
});
Router.route('/login', {name: 'login'});
Router.route('/users', {
    name: 'usersOnline',
    waitOn: function () {
        return Meteor.subscribe('userStatus');
    }
});
Router.route('/view/:id', {name: 'view'});

// User
Router.route('/logout', function () {
    Meteor.logout();
});

// Admin
Router.route('/admin', {name: 'adminDashboard'});
Router.route('/admin/users', {
    name: 'adminUsers',
    waitOn: function () {
        return Meteor.subscribe('users');
    }
});
Router.route('/admin/torrents', {name: 'adminTorrents'});
Router.route('/admin/series', {name: 'adminSeries'});

// Permission
Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
        this.redirect('/login');
    } else {
        var permission = Meteor.users.findOne({_id:Meteor.userId()}).profile.permission;
        if(Iron.Location.get().path.includes('admin') && permission < 4){
            this.redirect('/');
        }else if(Iron.Location.get().path.includes('login') && Meteor.loggingIn()){
            this.redirect('/');
        }
    }
    this.next();
});