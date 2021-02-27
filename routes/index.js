var data = require('../data.json');
/*
 * GET home page.
 */
  exports.view = function(req, response) {
	response.render('index', data);
  }

  /* Get POST request to get quiz name from index.js in js file once lesson is completed 
  	take the data.json object, grab old quiz, push quiz name to old quiz with changed image
	remove quiz name from new quiz
 
  */

  /*
exports.view = function(request, response){
  response.render('index', {
	'newquiz': [
		{ 	'name': 'Lesson 1: Introduce Yourself',
			'image': 'enter.svg',
			'id': 'quiz1'
		},
		{ 	'name': 'Lesson 2: Start a Conversation',
			'image': 'enter.svg',
			'id': 'quiz2'
		} ,
		{ 	'name': 'Lesson 3: At a Restaurant',
			'image': 'enter.svg',
			'id': 'quiz3'
		},
		{ 	'name': 'Lesson 4: At an Airport',
			'image': 'enter.svg',
			'id': 'quiz4'
		},
		{ 	'name': 'Lesson 5: At Public Transportation',
			'image': 'enter.svg',
			'id': 'quiz5'
		},
		{ 	'name': 'Lesson 6: At a Supermarket',
			'image': 'enter.svg',
			'id': 'quiz6'
		},
		{ 	'name': 'Lesson 7: At a School',
			'image': 'enter.svg',
			'id': 'quiz7'
		},
		{ 	'name': 'Lesson 8: At a Party',
			'image': 'enter.svg',
			'id': 'quiz8'
		} 	
	], 
  'oldquiz':[
		{ 	'name': 'Lesson 0: I Am Fake',
			'image': 'redo.svg',
			'id': 'quiz0'
		} 	
	]
  });
}; */
