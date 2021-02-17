
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('help', {
    'questionPage': [
      { 	'question': '1. What is the chatroom for?',
        'answer': 'The chatroom is for practicing different Spanish topics with other learners like you!',
        'id': 'q1'
      },
      { 	'question': '2. How do I get more points to level up my proficiency?',
        'answer': 'You gain points by successfully working on lessons located in the “Learn” menu.',
        'id': 'q2'
      },
      { 	'question': '3. How do I manually change my proficiency?',
        'answer': 'If you feel you are not in the correct proficiency, you can manually change your proficiency by navigating to your profile and selecting the “proficiency” option.',
        'id': 'q3'
      },
      { 	'question': '4. How do I switch accounts on this device?',
        'answer': 'You can use multiple accounts on a single device by navigating to your profile and selecting the “logout” option and “log in” with a different account.',
        'id': 'q4'
      },
      { 	'question': '5. I have a question that is not answered on this page!',
        'answer': 'To ask questions or report bugs, please contact: lingua@gmail.com',
        'id': 'q5'
      }		
    ]
    });
};

