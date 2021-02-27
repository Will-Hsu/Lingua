var data = require('../data.json');
/*
 * GET home page.
 */
  exports.view = function(req, response) {
	response.render('index', data);
  }