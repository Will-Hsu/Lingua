
/*
 * GET home page.
 */

var jsonObject = {
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
  };

  exports.view = function(request, response) {
	  response.render('index', jsonObject);
	  console.log(jsonObject);

	  /* // If quiz is true in local storage, move from new quiz to old quiz
	  jsonObject['oldquiz'].push();

	  //Delete from new quiz
	  delete jsonObject['newquiz'][];

	  */
  }

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
