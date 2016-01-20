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
   /* isAdminOrMember:function(pause){
      if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'],'mygroup')) {
          this.render('login');
          pause();
      }else{
          this.next();
      }
    }*/
}
var routerNameAdmin=[
  'admin',
  'manageuser',
  'managepost',
  'profile'
];
Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});//for admin
//Router.before(IR_BeforeHooks.isAdminOrMember, {only:routerNameMember});//for member
