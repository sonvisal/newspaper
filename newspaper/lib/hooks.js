<<<<<<< HEAD
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
=======
// var IR_BeforeHooks = {
//     isAdmin: function(pause) {
//       console.log('djib hook');   
//         if (!Roles.userIsInRole(Meteor.userId(), ['admin'],'mygroup')) {
//           this.render('login');
//           pause();
//         }else{
//           this.next();
//         }
//     },
/*    isAdminOrMember:function(pause){
>>>>>>> ebfa7eb3651824f9b83834df33ab2929f4804bd1
      if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'],'mygroup')) {
          this.render('login');
          pause();
      }else{
          this.next();
      }
    }
}
<<<<<<< HEAD
var routerNameAdmin=[
  'admin',
  'manageuser',
  'managepost',
  'profile'
];
Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});//for admin
=======
// var routerNameAdmin=[
//   'admin',
//   'manageuser',
//   'profile'
// ];
/*var routerNameMember=[
  'favorite',
  'checkout',
  'profile',
  'editprofile',
  'reward',
  'member',
  'advanced',
  'dailyPopupf',
  'confirmorder',
  'confirmorder1',
  'confirmorder2',
  'payment'
];*/
// Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});
//for admin
>>>>>>> ebfa7eb3651824f9b83834df33ab2929f4804bd1
//Router.before(IR_BeforeHooks.isAdminOrMember, {only:routerNameMember});//for member
