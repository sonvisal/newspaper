
var IR_BeforeHooks = {
    isAdmin: function(pause) {
      console.log('sreyden hook');   
        if (!Roles.userIsInRole(Meteor.userId(), ['admin'],'admin')) {
          this.render('login');
          pause();
        }else{
          this.next();
        }
    },
}
var routerNameAdmin=[
	'admin',
	'manageuser',
	'managepost',
	'profile'
];
<<<<<<< HEAD
Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});
=======
 Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});
>>>>>>> 1bd5078eaed2d2e9f32c7470183e1f365da3829c
