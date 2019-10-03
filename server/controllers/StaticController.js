'use strict';

exports.index = function(req, res) {
	res.format({
		html: function() {
			res.render('index.dust', {
				title: 'Hello dust world'
			});
		}
	});
};
