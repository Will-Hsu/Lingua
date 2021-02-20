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
    "name": "Kim",
    "image": "images/Lucy.png",
    "text":	request.query.usermsg,
    "time": n,
    "theme": "darker",
    "imgPos" : "right", 
    "timePos": "time-left"
	}
	data.BeginnerConvChat.push(newMessage);
	response.render('chat', data);
	console.log(newMessage);
    responseToMessage(newMessage["name"]);
}

function responseToMessage(name){
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
        "name": "David",
        "image": "images/Ivan.png",
        "text":	"Hi, " + name + ". Nice to Meet You",
        "time": n,
        "theme": "container",
        "imgPos" : "", 
        "timePos": "time-right"
    }
    data.BeginnerConvChat.push(newMessage);
    console.log(newMessage);
}