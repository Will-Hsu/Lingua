
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('help', {
    'questionPage': [
      { 	'question': '1. What is the chatroom for?',
        'answer': 'The chatroom is for practicing various Spanish topics and building a community with other learners like you!',
        'id': 'q1'
      },
      { 	'question': '2. How do I get more points to level up my proficiency?',
        'answer': 'You gain points by successfully working on lessons and finishing each quiz located on the “Learn” page.',
        'id': 'q2'
      },
      { 	'question': '3. How do I manually change my proficiency setting?',
        'answer': 'If you feel you are not in the correct proficiency, you can manually change your proficiency by navigating to the "Profile" page and selecting the “proficiency” option.',
        'id': 'q3'
      },
      { 	'question': '4. How do I logout or switch accounts?',
        'answer': 'You can logout or switch accounts on the "Profile" page by selecting the “logout” option which redirects you to the “log in” page.',
        'id': 'q4'
      },
      { 	'question': '5. I have a question that is not answered on this page!',
        'answer': 'To ask questions or report bugs, please contact us: lingua@gmail.com',
        'id': 'q5'
      }		
    ]
    });
};

