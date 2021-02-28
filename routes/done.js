var data = require("../data.json");

exports.view = function(request, response) {   
    var name = request.params.name;
    console.log("this is the name " + name);
    var completed = {
        "name": name,
        "image": "redo.svg",
        "id": "quizcompleted"
    }
    data.oldquiz.push(completed);
}