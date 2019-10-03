var MongoClient = require('mongodb').MongoClient,
		co = require('co');

co(function*() {
	// Connection URL
	var url = 'mongodb://localhost:27017/myproject';
	// Use connect method to connect to the Server
	var db = yield MongoClient.connect(url);
	// Close the connection
	db.close();
}).catch(function(err) {
	console.log(err.stack);
});



exports.get = () => {

};

exports.write = () => {

};
