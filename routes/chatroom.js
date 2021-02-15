
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('chatroom', {
    'proficiency': [
      { 	'name': '🏫 Beginner Grammar',
        'image': 'enter.svg',
        'id': 'beginGram'
      },
      { 	'name': '🏫 Beginner Conversation',
        'image': 'enter.svg',
        'id': 'beginConv'
      },
      { 	'name': '🏫 Beginner Writing',
        'image': 'enter.svg',
        'id': 'beginWriting'
      },
      { 	'name': '🏫 Beginner Reading',
        'image': 'enter.svg',
        'id': 'beginRead'
      } 	
    ], 
    'generalChat':[
      { 	'name': '🌮 Foods',
          'image': 'enter.svg',
          'description': 'Chat about good Spanish/Mexican food',
          'id': 'foodChat'
      },
      { 	'name': '✈️ Travel',
        'image': 'enter.svg',
        'description': 'Chat about travel stories and recommendations',
        'id': 'travelChat'
      },
      { 	'name': '🖼 Arts & Culture',
        'image': 'enter.svg',
        'description': 'Chat about Arts and Culture',
        'id': 'artsChat'
      },
      { 	'name': '🎮 Gaming',
        'image': 'enter.svg',
        'description': 'Chat about your favorite games',
        'id': 'gameChat'
      } 	
    ]
    }
  
  );
};

