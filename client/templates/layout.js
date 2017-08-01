Template.body.rendered = function () {
    AutoCompletion.init("input#searchBox");
}

Template.body.events = {
    'keyup input#name': function () {
        AutoCompletion.autocomplete({
            element: 'input#name',
            collection: Meteor.users,
            field: 'username',
            limit: 0,
            sort: { username: 1 }});
    }
}