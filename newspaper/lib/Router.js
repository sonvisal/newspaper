
Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/article', {
    name: 'article'
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
Router.route('/comments/:_id', {
    name: 'comments',
  data: function(){
	var id = this.params._id;
	return article.findOne({_id: id})
  }
});
