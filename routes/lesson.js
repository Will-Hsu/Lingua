var data = require('../data.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.name;
  data['lessonname'] = name;
  res.render('lesson', data);
};