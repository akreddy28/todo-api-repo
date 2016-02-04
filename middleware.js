var cryptojs = require('crypto-js');

module.exports = function(db) {

	return {
		requiredAuthentication: function(req, res, next) {
			var token = req.get('Auth') || '';

			db.token.findOne({
				where: {
					tokenHash: cryptojs.MD5(token).toString()
				}
			}).then(function(tokenInastance) {
				if(!tokenInastance) {
					throw new Error();
				}

				req.token = tokenInastance;
				return db.user.findByToken(token);
			}).then(function(user) {
				req.user = user;
				next();
			}).catch(function() {
				res.status(401).send();
			});


			// db.user.findByToken(token).then(function(user) {
			// 	req.user = user;
			// 	next();
			// }, function() {
			// 	res.status(401).send();
			// });
		}
	};
};