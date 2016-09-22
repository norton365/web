var express = require('express');
var router = express.Router();
//mangodb code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/mongodb_test');

/* GET home page. */
router.get('/', function(req, res, next) {
	var collection = db.get('usercollection');
	collection.find({}, {}, function(e, users) {
		res.render('index', {"userlist": users,title:'Hello,NodeJS'});
	});
});

module.exports = router;