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
      if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'],'mygroup')) {
          this.render('login');
          pause();
      }else{
          this.next();
      }
    }*/
// }
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
//Router.before(IR_BeforeHooks.isAdmin, {only:routerNameAdmin});
//for admin
//Router.before(IR_BeforeHooks.isAdminOrMember, {only:routerNameMember});//for member
