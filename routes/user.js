var data = require("../data.json");

exports.addUser = function(request, response) {   
    console.log(request.body);
    //data.currentUser.push(request.body);
    //console.log(data.currentUser);
    //response.render("index", {"currentUser":[request.body]});
}