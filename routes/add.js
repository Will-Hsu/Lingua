var data = require("../data.json");

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
    "name": "Chris",
    "image": "/images/Chris.png",
    "text":	request.query.usermsg,
    "time": n,
    "theme": "darker",
    "imgPos" : "right", 
    "timePos": "time-left"
	}
	data.BeginnerConvChat.push(newMessage);
	response.render('chat', data);
	console.log(newMessage);
    //setTimeout(function(){ responseToMessage(newMessage["name"]);}, 1000); // create a one second delay
    //setTimeout(responseToMessage, 1000, newMessage["name"]);
    responseToMessage(newMessage["name"]);
}

function responseToMessage(nameInput){
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

    var ran = Math.floor((Math.random() * 5) + 1); // 1 - 5 random
    var name; var image; var responseTochar;
    if(ran == 1){
        name = "David";
        image = "/images/David.png";
        responseTochar = "¿Qué tal?";
    }
    else if(ran == 2){
        name = "Ivan";
        image = "/images/Ivan.png";
        responseTochar = "Estoy en nueva york. Dónde estás?";
    }
    else if(ran == 3){
        name = "Lucy";
        image = "/images/Lucy.png";
        responseTochar = "Nice to meet you!";
    }
    else if(ran == 4){
        name = "Ivan";
        image = "/images/Ivan.png";
        responseTochar = "Nice to meet you!";
    }
    else{
        name = "Spiderman";
        image = "https://media.giphy.com/media/JU3wJzTin54XiXGgVR/giphy.gif";
        responseTochar = "Cuál es tu película favorita?";
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
    data.BeginnerConvChat.push(newMessage);
    console.log(newMessage);
}