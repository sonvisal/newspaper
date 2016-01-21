Template.navleft.events({
    'click #logout': function(event){
        event.preventDefault();
        alert("logout");
        Session.set('content',"");
        Session.set('profile',"");
        Meteor.logout();
        Router.go('login');
    }
});