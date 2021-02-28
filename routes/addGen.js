var data = require("../data.json");
var url = require('url');

exports.sendMessage = function(request, response) {
    var d = new Date();
    var n = d.toTimeString().substring(0, 5);

    var hour = parseInt(n.substring(0, 2)); // 0 -> 12 AM, 12 -> 12 PM, 
    if(hour > 12){
        hour = ((hour - 12) < 10)? "0" + (hour - 12) : (hour - 12);
        n = hour + n.substring(2) + " PM";
    }
    else if(hour == 12) n = n + " PM";
    else if(hour == 0) n = "12" + n.substring(2) + " AM"
    else n = n + " AM";

	var newMessage = {
    "name": request.query.username,
    "image": request.query.userimg,
    "text":	request.query.usermsg,
    "time": n,
    "theme": "darker",
    "imgPos" : "right", 
    "timePos": "time-left"
	}
	data.FoodChat.push(newMessage);
	response.render('chat', data);
	console.log(newMessage);
    //setTimeout(function(){ responseToMessage(newMessage["name"]);}, 1000); // create a one second delay
    //setTimeout(responseToMessage, 1000, newMessage["name"]);
    responseToMessage(newMessage["name"]);
}

var counter = 0;

function responseToMessage(nameInput){
    counter++;
    var d = new Date();
    var n = d.toTimeString().substring(0, 5);

    var hour = parseInt(n.substring(0, 2)); // 0 -> 12 AM, 12 -> 12 PM, 
    if(hour > 12){
        hour = ((hour - 12) < 10)? "0" + (hour - 12) : (hour - 12);
        n = hour + n.substring(2) + " PM";
    }
    else if(hour == 12) n = n + " PM";
    else if(hour == 0) n = "12" + n.substring(2) + " AM"
    else n = n + " AM";

    var name; var image; var responseTochar;
    if(counter % 5 == 1){
        name = "David";
        image = "/images/David.png";
        responseTochar = "Cuál es tu comida favorita? Me gustan los macarrones con queso.";
    }
    else if(counter % 5 == 2){
        name = "Ivan";
        image = "/images/Ivan.png";
        responseTochar = "Vivo en San Diego y tenemos los mejores tacos. You should try some!";
    }
    else if(counter % 5 == 3){
        name = "Lucy";
        image = "/images/Lucy.png";
        responseTochar = "Nice to meet you!";
    }
    else if(counter % 5 == 4){
        name = "Charlie";
        image = "/images/Charlie.png";
        responseTochar = "I like spicy chicken mcnuggets!";
    }
    else{
        name = "Spiderman";
        image = "https://media.giphy.com/media/JU3wJzTin54XiXGgVR/giphy.gif";
        responseTochar = "Me gusta el té de BOBA. Do you like them?";
    }

    var newMessage = {
        "name": name,
        "image": image,
        "text":	"Hi, " + nameInput + ". " +responseTochar,
        "time": n,
        "theme": "container",
        "imgPos" : "", 
        "timePos": "time-right"
    }
    data.FoodChat.push(newMessage);
    console.log(newMessage);
}