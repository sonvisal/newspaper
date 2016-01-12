Meteor.methods({
  registerUser:function(fullname,email,username, password,rerole){
      targetUserId = Accounts.createUser({
        email: email,
        password: password,
        profile:{
          "fullname":fullname,
          "username":username
        },
        role:rerole
      });
      console.log(targetUserId);
      //Roles.setUserRoles(id, roleid, 'noolab')
      Roles.setUserRoles(targetUserId, [rerole], 'admin')
    }
});
