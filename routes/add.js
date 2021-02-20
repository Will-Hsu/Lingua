var data = require("../data.json");

exports.sendMessage = function(request, response) {   
	var newMessage = {
    "name": "Kim",
    "image": "images/Lucy.png",
    "text":	request.query.usermsg,
    "time": "1:32",
    "theme": "container",
    "imgPos" : "", 
    "timePos": "time-right"
	}
	data.BeginnerConvChat.push(newMessage);
	response.render('chat', data);
	console.log(newMessage);
}