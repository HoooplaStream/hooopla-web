Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'layout',
    progressSpinner: false,
    waitOn: function () {
        return Meteor.subscribe('invitations.get');
    },
    data: function () {
        invitations = watchInvitation.find({target_user: Meteor.userId()})
    }
});

// Site
Router.route('/', {
    name: 'homeSeries',
    waitOn: function () {
        return [Meteor.subscribe('series')];
    }
});

// Serie view
Router.route('/serie/:_id', {
    name: 'serie',
    data: function () {
        Session.set('currentSerie', this.params._id);
        let result = series.findOne(new Mongo.ObjectID(this.params._id));

        let favoritesDB = Meteor.users.findOne({_id: Meteor.userId()});
        console.log(favoritesDB);
        let favorite = $.inArray(this.params._id, favoritesDB.favorites);
        return result;
    },
    waitOn: function () {
        return [Meteor.subscribe('seriesOne', this.params._id)];
    },
});

// Visionnage
Router.route('/users', {
    name: 'usersOnline',
    waitOn: function () {
        return [Meteor.subscribe('userStatus')];
    }
});
Router.route('/view/:_id/:saison/:episode', {
    name: 'view',
    waitOn: function () {
        return Meteor.subscribe('seriesOne', this.params._id)
    },
    data: {
        room: function () {
            var room = Streamy.rooms(Meteor.userId());
            console.log(room);

            return room;
        },
        serie: function () {
            return series.findOne({_id: new Mongo.ObjectID(Router.current().params._id)});
        },
        episode: function () {
            var id = Router.current().params._id;
            var saison = Router.current().params.saison;
            var episodeParam = Router.current().params.episode;

            var serie = series.findOne(new Mongo.ObjectID(id));

            var work = false;
            var episode = null;
            serie.saisons.forEach(function(entry) {
                if(parseInt(saison) == entry.id){
                    entry.episodes.forEach(function(episodeDB) {
                        if(episodeDB.id == parseInt(episodeParam)){
                            work = true;
                            episode = episodeDB;
                            console.log(episode);
                        }
                    });
                }
            });

            return episode;
        }
    }
});

// User
Router.route('/login', {name: 'login'});
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
Router.route('/admin/conversions', {
    name: 'adminConversions',
    waitOn: function () {
        return Meteor.subscribe('conversions.get');
    }
});
Router.route('/admin/series', {name: 'adminSeries'});

// Permission
Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.redirect('/login');
    } else {
        /*var permission = Meteor.users.findOne({_id: Meteor.userId()}).profile.permission;
        if (Iron.Location.get().path.includes('admin') && permission < 4) {
            this.redirect('/');
        } else if (Iron.Location.get().path.includes('login') && Meteor.loggingIn()) {
            this.redirect('/');
        }*/
    }
    this.next();
});