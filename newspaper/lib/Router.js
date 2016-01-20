

Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/article', {
    name: 'article'
});
Router.route('/view', {
    name: 'view'
});
Router.route('/admin', {
    name: 'admin'
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
	var id = this.params._id;
	return article.findOne({_id: id})
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
