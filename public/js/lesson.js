/** The following code was adapted from https://codepen.io/teachtyler/pen/raEprM for our multiple choice implementation **/
// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [
  {
  question_string: "How do you say 'Hello!' in Spanish?",
  choices: {
    correct: "Hola!",
    wrong: ["Mchola!", "Ola!", "Lotion!"]
  }
}, 
{
  question_string: "How do you say 'I am happy' in Spanish?",
  choices: {
    correct: "Yo estoy feliz",
    wrong: ["Yo estoy felix", "Me estoy feliz", "Feliz Navidad"]
  }
},
{
  question_string: "How do you say 'My name is' in Spanish?",
  choices: {
    correct: "Me llamo",
    wrong: ["Mi perro esta corriendo", "El cielo es azul", "La magia es real"]
  }
}, 
{
  question_string: "How do you say 'I am 5 years old' in Spanish?",
  choices: {
    correct: "Tengo 5 años",
    wrong: ["Tengo 5 año", "Tengo 5 eños", "Mis magias eres 5 eños"]
  }
}, 
{
  question_string: "How do you say 'My favorite color is' in Spanish?",
  choices: {
    correct: "Mi color favorito es",
    wrong: ["Mi calar favorito es", "La magia es real", "Mi calor favorito es"]
  }
}];

var correctAnswers = ["Hola!", "Mi trabajo es", "Me llamo", "Mi edad es", "Mi color favorito es"];
var incorrect_points = [];
var pointavailable = 1;
var totalPoints = 0;

// An object for a Quiz, which will contain Question objects.
var Quiz = function() {  this.questions = [];}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  //$('#quiz-results').hide();
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quizName');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    pointavailable = 1;
    console.log("total points: " + totalPoints);
    document.getElementById("ptpossible").innerHTML = "Points Possible: " + 1/pointavailable;
    document.getElementById("ptearned").innerHTML = "Points Earned: " + totalPoints;
    document.getElementById("progress").innerHTML = "Progress: "+ (current_question_index + 1) +" out of 5";
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the next question button
  $('#checkButton').click(function() {
    for(let i = 0; i < 4; i++){
      let checkid = "choices-" + i;
      let labelid = "choiceLabel" + i;
      if(!document.getElementById(checkid).checked) continue;
      if(correctAnswers.includes(document.getElementById(labelid).innerHTML)){
        document.getElementById(labelid).style.border = '2px solid limegreen';
        totalPoints += 1/pointavailable;
        if(++current_question_index < 5) setTimeout(function(){ change_question();}, 1000);
        else doneQuiz();
        pointavailable = 1;
      }else{
        // make it red update points
        document.getElementById(labelid).style.border = '2px solid red';
        pointavailable *= 2;
        document.getElementById("ptpossible").innerHTML = "Points Possible: " + 1/pointavailable;
      }
    }
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * 4) + 0;  
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Get rid of previous question's choices and create current new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }

  // Multiple choice buttons are radio buttons
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .attr('id', 'choiceLabel' + i)
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// Create all the objects and render the Quiz.
$(document).ready(function() {});

function doneQuiz(){
  document.getElementById("quiz").style.visibility = "hidden";
  
  // Display message
  document.getElementById("quiz-results").style.display = "block";
  document.getElementById("quiz-results-message").innerHTML = "Congrats! You finished!";
  document.getElementById("quiz-results-score").innerHTML = totalPoints;
}

function startQuiz(e){
  document.getElementById("learningPage").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  var quiz = new Quiz();
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    quiz.add_question(question);
  }
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
}
