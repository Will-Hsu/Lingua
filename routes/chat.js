var data = require('../data.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.name;
  data['chatname'] = name;
  data['database'] = "BeginnerConvChat";
  res.render('chat', data);
};

