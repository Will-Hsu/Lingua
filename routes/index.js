
/*
 * GET home page.
 */

exports.view = function(request, response){
  response.render('index', {
	'newquiz': [
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
		{ 	'name': 'Lesson 1: Introduce Yourself',
		    'image': 'redo.svg',
		    'id': 'quiz1'
		},
		{ 	'name': 'Lesson 2: Start a Conversation',
			'image': 'redo.svg',
			'id': 'quiz2'
		}  	
	]
  });
};
