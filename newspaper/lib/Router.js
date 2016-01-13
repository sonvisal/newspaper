
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
