
Meteor.methods({
  addUser:function(firstname,lastname,email,username, password, rerole){
      targetUserId = Accounts.createUser({
        email: email,
        password: password,
        profile:{
          "username":username,
          "firstname":firstname,
          "lastname":lastname
        },
        role:rerole
      });
      console.log(targetUserId);
      //Roles.setUserRoles(id, roleid, 'noolab')
      Roles.setUserRoles(targetUserId, [rerole], 'admin')
    }
});
