Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/article', {
    name: 'article'
});

Router.route('/managepost', {
    name: 'managepost'
});
Router.route('/view', {
    name: 'view'
});

Router.route('/register', {
    name: 'register'
});
Router.route('/login', {
    name: 'login'
});
Router.route('/manageuser', {
    name: 'manageuser'
});
Router.route('/comments/:_id', {
    name: 'comments',
  data: function(){
	var userId = Meteor.userId();
	if (!userId ){
		//Session.set('like_login',content_id);
	         Router.go('login');	
	}
	else{
		var id = this.params._id;
	return article.findOne({_id: id})
	}
	
  }
});
Router.route("/profile",{
	name:"profile"
});
Router.route("/toparticle",{
    name:"toparticle"
});
Router.route('/article/edit/:_id', {
    name: 'updatearticle',
    data:function(){
        return article.findOne({_id:this.params._id})
    }
});

Router.route("/search",{
    name:"search"
});

Router.route('/admin/edituser/:_id', {
    name: 'edituser',
    data:function(){
        return users.findOne({_id:this.params._id})
    }

});
