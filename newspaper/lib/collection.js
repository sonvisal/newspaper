
comments = new Mongo.Collection("comments");
users = Meteor.users;
article = new Mongo.Collection("article");
like = new Mongo.Collection("like");

// if (Meteor.isServer) {
// 	/*fullpath=process.env.PWD;
// 	fullpath=fullpath+'/public/upload';
// 	console.log("myPath:"+fullpath);
// 	*/
// 	var base_path = Meteor.npmRequire('fs').realpathSync( process.cwd() + '../../' );
// 	//console.log("upload_path:"+base_path);
// 	base_path = base_path.split('\\').join('/');
// 	base_path = base_path.replace(/\/\.meteor.*$/, '');
// 	//console.log("upload_path:"+base_path);
// }
// else{
// 	fullpath="/";
// }

images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path:base_path+"/uploads"})]
});